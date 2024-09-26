import { create } from "zustand";
import { fetchById } from "../utils/actions";
import { getTherapist } from "../utils/url";
import { EducationList } from "../utils/static-lists";
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
  therapistInfo: {
    name: "",
    phone: "",
    profile: "",
    email: "",
    serve_type: "",
    profile_type: "",
    mode: "",
    profile_code: "",
    license_number: "",
    gender: "",
    state: "",
    office_address: "",
    year_of_exp: "",
    qualification: "",
    language_spoken: [],
    session_formats: [],
    services: "",
    experties: "",
    bio: "",
    createdAt: "",
    updatedAt: "",
    fileKey: "",
    profileKey: "",
    othEducation: false,
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
  profileSet: false,
  setProfileSet: (newProfileSet) => set({ profileSet: newProfileSet }),
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

  setTherapistInfo: (data) =>
    set((state) => ({ therapistInfo: { ...state.therapistInfo, ...data } })),
  setInfo: (key, value) =>
    set((state) => ({
      therapistInfo: { ...state.therapistInfo, [key]: value },
    })),
  setSessionFormats: (formats) =>
    set((state) => ({
      therapistInfo: {
        ...state.therapistInfo,
        session_formats: formats.split(",").map((item) => item.trim()),
      },
    })),
  fetchTherapistInfo: async () => {
    try {
      const response = await fetchById(getTherapist);
      console.log("resss", response);
      if (response.status) {
        const fetchedData = response.data;

        // Transform session_formats
        fetchedData.session_formats = fetchedData.session_formats
          ? fetchedData.session_formats.split(",").map((item) => item.trim())
          : [];
        fetchedData.othEducation = !EducationList.some(
          (qualification) => fetchedData.qualification === qualification
        );

        fetchedData.language_spoken = fetchedData.language_spoken
          ? fetchedData.language_spoken.split(",").map((value) => ({
              value: value.trim(),
              label: value.trim(),
            }))
          : [];
        set((state) => ({
          therapistInfo: { ...state.therapistInfo, ...fetchedData },
        }));
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
  console.log("state", state.therapistInfo);
});

export default useTherapistStore;
