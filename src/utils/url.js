let apiUrl;
const currentDomain = window.location.hostname;

if (currentDomain === "localhost") {
  apiUrl = "http://localhost:4000/api";
} else {
  apiUrl = "https://cytapi.ap-south-1.elasticbeanstalk.com/api";
}

export const loginUrl = `${apiUrl}/login`;
export const threapistRegistrationUrl = `${apiUrl}/therapist-registeration`;
export const registerUrl = `${apiUrl}/register`;
export const sendOtpUrl = `${apiUrl}/send-otp`;
export const sendForgotPasswordOtpUrl = `${apiUrl}/send-forgot-password-otp`;
export const verifyOtpUrl = `${apiUrl}/verify-otp`;
export const resetpasswordpUrl = `${apiUrl}/reset-password`;
export const changePasswordUrl = `${apiUrl}/change-passowrd`;
// user
export const getUserUrl = `${apiUrl}/get-user`;
export const updateUserUrl = `${apiUrl}/update-user`;
export const changeClientPasswordUrl = `${apiUrl}/change-client-passowrd`;
//Therapist
export const getTherapists = `${apiUrl}/get-therapists`;
export const getTherapist = `${apiUrl}/get-therapist`;
export const updateProfileUrl = `${apiUrl}/update-profile`;
export const updateTherapistProfileUrl = `${apiUrl}/update-therapist-profile`;
export const updateServiceExpertiesUrl = `${apiUrl}/update-service-experties`;
export const updateAccountDetailsUrl = `${apiUrl}/update-account-details`;
export const updateFeeDetailsUrl = `${apiUrl}/update-fee-details`;
export const getAccountDetailsUrl = `${apiUrl}/get-bank-details`;
export const getFeeDetailsUrl = `${apiUrl}/get-fee-details`;
export const updateAvailabilitiesUrl = `${apiUrl}/update-availability-details`;
export const getAvailabilitiesUrl = `${apiUrl}/get-availability-details`;
export const getTherapistProfiles = `${apiUrl}/get-therapists-profile`;
export const getTherapistProfile = `${apiUrl}/get-profile/`;
export const sendOtpTosubscribe = `${apiUrl}/send-otp-to-subscribe`;
export const verifyOtpTosubscribe = `${apiUrl}/verify-otp-to-subscribe`;
export const defaultProfile =
  "https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-thumbnail.png";
