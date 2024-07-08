import { create } from "zustand";
import { fetchById } from "../utils/actions";
import { getUserUrl } from "../utils/url";
const initialTimes = {
  Monday: [{ open: "", close: "" }],
  Tuesday: [{ open: "", close: "" }],
  Wednesday: [{ open: "", close: "" }],
  Thursday: [{ open: "", close: "" }],
  Friday: [{ open: "", close: "" }],
  Saturday: [{ open: "", close: "" }],
  Sunday: [{ open: "", close: "" }],
};
const useTherapistStore = create((set) => ({
  paymentStore: {
    ac_name: "",
    ac_number: "",
    ifsc: "",
    upi: "",
  },
  userInfo: {
    name: "",
    phone: "",
    profile: "",
    email: "",
    bio: "",
  },
  feeDetails: {
    icv: "",
    ica: "",
    icip: "",
    cca: "",
    ccv: "",
    ccip: "",
    tca: "",
    tcv: "",
    tcip: "",
  },
  times: initialTimes,
  setTimes: (day, index, type, value) =>
    set((state) => {
      const updatedTimes = { ...state.times };
      updatedTimes[day][index][type] = value;
      return { times: updatedTimes };
    }),
  setTimesAll: (newTimes) => set(() => ({ times: newTimes })),
  addOvertime: (day) =>
    set((state) => {
      const updatedTimes = { ...state.times };
      updatedTimes[day].push({ open: "", close: "" });
      return { times: updatedTimes };
    }),
  deleteOvertime: (day, index) =>
    set((state) => {
      const updatedTimes = { ...state.times };
      updatedTimes[day].splice(index, 1);
      return { times: updatedTimes };
    }),

  setUserInfo: (data) =>
    set((state) => ({ userInfo: { ...state.userInfo, ...data } })),
  fetchUserInfo: async () => {
    try {
      const response = await fetchById(getUserUrl);
      if (response.status) {
        set((state) => ({ userInfo: { ...state.userInfo, ...response.data } }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },

  setPaymentStore: (key, value) =>
    set((state) => ({ paymentStore: { ...state.paymentStore, [key]: value } })),
  setMultiplePaymentStore: (data) =>
    set((state) => ({ paymentStore: { ...state.paymentStore, ...data } })),
  setFeeDetails: (key, value) =>
    set((state) => ({ feeDetails: { ...state.feeDetails, [key]: value } })),
  setMultipleFeeDetails: (data) =>
    set((state) => ({ feeDetails: { ...state.feeDetails, ...data } })),
}));

/**
 *
 * set((newName) => ({ ac_name: newName }))
 */

useTherapistStore.subscribe((state) => {
  console.log("state", state.times);
});

export default useTherapistStore;
