import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./pages/login";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notfound";
import ProtectedRoute from "./pages/protectedroute";
import AboutUs from "./pages/about-us";
import Services from "./pages/services";
import ContactUs from "./pages/contact-us";
import JoinUs from "./pages/join-us";
import Plans from "./pages/plans";
import FaqPage from "./pages/faqs";
import Blogs from "./pages/blogs";
import UserDashboard from "./pages/client/user-dashboard";
import ViewProfile from "./pages/view-profile";
import TherapistRegistration from "./pages/therapist-registration";
import Register from "./pages/register";
import Success from "./pages/success";
import TherapistDashboard from "./pages/therapists/dashboard";
import ProfileSettings from "./pages/therapists/settings";
import ChangePassword from "./pages/therapists/change-password";
import Appointment from "./pages/therapists/appointment";
import Notification from "./pages/therapists/notifications";
import Invoices from "./pages/therapists/invoices";
import Reviews from "./pages/therapists/reviews";
import TherapistProtectedRoute from "./utils/therapistProtectedRoute";
import { useEffect } from "react";
import useTherapistStore from "./store/therapistStore";
import useUserStore from "./store/userStore";
import { getDecodedToken, getToken, removeToken } from "./utils/jwt";
import ClientSettings from "./pages/client/settings";
import AllWorkshop from "./pages/allworkshop";
import ViewAllTherapist from "./pages/view-all-therapist-page";
import CreateWorkshopPage from "./pages/therapists/create-workshop";
import Workshops from "./pages/therapists/workshops";
import UpdateWorkshopPage from "./pages/therapists/update-workshop";
import WrokshopDetailPage from "./pages/workshop-detail-page";
import Forgotpassword from "./pages/forgot-password";
import FavriouteTherapistPage from "./pages/client/favrioute-therapits";
import TherapistCheckoutPage from "./pages/therapist-checkout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import CancellationPolicy from "./pages/cancel-policy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentPending from "./components/view_profile/payment-pending";
import PaymentPendingPage from "./pages/payment-pending";
import MyBookingsPage from "./pages/client/my-bookings";
const theme = createTheme();

function App() {
  const { fetchTherapistInfo } = useTherapistStore();
  const { fetchUserInfo } = useUserStore();
  useEffect(() => {
    const data = getToken();

    if (data) {
      const userData = getDecodedToken();
      const currentTime = Date.now() / 1000;
      if (userData.exp < currentTime) {
        removeToken();
      } else {
        if (userData.role === 1) {
          fetchTherapistInfo();
        } else {
          fetchUserInfo();
        }
      }
    }
  }, [fetchUserInfo, fetchTherapistInfo]);
  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="offcanvas-overlay"></div>
        <div className="wrapper">
          {/* <TopNav /> */}
          <div className="main-wrapper">
            {/* <Nav /> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route
                exact
                path="/forgot-password"
                element={<Forgotpassword />}
              />
              <Route
                exact
                path="/therapist-registration"
                element={<TherapistRegistration />}
              />
              <Route
                path="/view-all-therapist"
                element={<ViewAllTherapist />}
              />
              <Route exact path="/auth/success" element={<Success />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services/:id" element={<Services />} />
              <Route path="/view-profile/:id" element={<ViewProfile />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/faqs" element={<FaqPage />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/all-workshop" element={<AllWorkshop />} />

              <Route
                path="/workshop-detail/:id"
                element={<WrokshopDetailPage />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsCondition />} />
              <Route
                path="/cancellation-policy"
                element={<CancellationPolicy />}
              />
              <Route path="/notfound" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
              {/* client routes */}

              <Route
                path="/my-dashboard"
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/my-appointments"
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/my-settings"
                element={
                  <ProtectedRoute>
                    <ClientSettings />
                  </ProtectedRoute>
                }
              />
              {
                <Route
                  path="/my-therapists"
                  element={
                    <ProtectedRoute>
                      <FavriouteTherapistPage />
                    </ProtectedRoute>
                  }
                />
              }

              {
                <Route
                  path="/my-bookings"
                  element={
                    <ProtectedRoute>
                      <MyBookingsPage />
                    </ProtectedRoute>
                  }
                />
              }

              <Route
                path="/therapist-checkout/:id"
                element={
                  <ProtectedRoute>
                    <TherapistCheckoutPage />
                  </ProtectedRoute>
                  // <TherapistCheckoutPage />
                }
              />

              <Route
                path="/payment-pending/:id"
                element={
                  <ProtectedRoute>
                    <PaymentPendingPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/payment-success/"
                element={
                  <ProtectedRoute>
                    <Success />
                  </ProtectedRoute>
                }
              />

              {/* therapist related routes */}
              <Route
                exact
                path="/therapist-dashboard"
                element={
                  <TherapistProtectedRoute>
                    <TherapistDashboard />
                  </TherapistProtectedRoute>
                }
              />
              <Route
                exact
                path="/settings"
                element={
                  <TherapistProtectedRoute>
                    <ProfileSettings />
                  </TherapistProtectedRoute>
                }
              />

              <Route
                exact
                path="/appointments"
                element={
                  <TherapistProtectedRoute>
                    <Appointment />
                  </TherapistProtectedRoute>
                }
              />

              <Route
                path="/invoices"
                element={
                  <TherapistProtectedRoute>
                    <Invoices />
                  </TherapistProtectedRoute>
                }
              />

              <Route
                path="/reviews"
                element={
                  <TherapistProtectedRoute>
                    <Reviews />
                  </TherapistProtectedRoute>
                }
              />

              <Route
                exact
                path="/change-password"
                element={
                  <TherapistProtectedRoute>
                    <ChangePassword />
                  </TherapistProtectedRoute>
                }
              />
              <Route
                exact
                path="/notifications"
                element={
                  <TherapistProtectedRoute>
                    <Notification />
                  </TherapistProtectedRoute>
                }
              />

              <Route
                exact
                path="/appointments"
                element={
                  <TherapistProtectedRoute>
                    <Appointment />
                  </TherapistProtectedRoute>
                }
              />
              <Route
                exact
                path="/workshops"
                element={
                  <TherapistProtectedRoute>
                    <Workshops />
                  </TherapistProtectedRoute>
                }
              />
              <Route
                exact
                path="/create-workshop"
                element={
                  <TherapistProtectedRoute>
                    <CreateWorkshopPage />
                  </TherapistProtectedRoute>
                }
              />
              <Route
                exact
                path="/update-workshop/:id"
                element={
                  <TherapistProtectedRoute>
                    <UpdateWorkshopPage />
                  </TherapistProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </>
    </ThemeProvider>
  );
}

export default App;
