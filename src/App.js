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
import ChangeMyPassword from "./pages/client/change-password";
import AllWorkshop from "./pages/allworkshop";
import NewWorkshops from "./pages/newworkshops";
import AllCourses from "./pages/allCourses";
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
  }, [fetchUserInfo]);
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
                path="/therapist-registration"
                element={<TherapistRegistration />}
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
              <Route path="/new-workshop" element={<NewWorkshops />} />
              <Route path="/notfound" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
              {/* client routes */}
              <Route
                path="/all-workshop"
                element={
                  // <ProtectedRoute>
                  <AllWorkshop />
                  // </ProtectedRoute>
                }
              />
              <Route
                path="/new-workshop"
                element={
                  // <ProtectedRoute>
                  <NewWorkshops />
                  // </ProtectedRoute>
                }
              />
              <Route
                path="/allcourses-filter"
                element={
                  // <ProtectedRoute>
                  <AllCourses />
                  // </ProtectedRoute>
                }
              />
              <Route
                path="/my-dashboard"
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

              <Route
                path="/change-my-password"
                element={
                  <ProtectedRoute>
                    <ChangeMyPassword />
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
            </Routes>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
