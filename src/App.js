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
import UserProfile from "./pages/user-profile";
import UserDashboard from "./pages/user-dashboard";
import ViewProfile from "./pages/view-profile";
import TherapistRegistration from "./pages/therapist-registration";
import Register from "./pages/register";
import Success from "./pages/success";
import TherapistDashboard from "./pages/therapists/dashboard";
import ProfileSettings from "./pages/therapists/settings";
import ChangePassword from "./pages/therapists/change-password";
import Appointment from "./pages/therapists/appointment";
import AppointmentCancelled from "./components/therapists/appointment-sidebar/appointment-cancelled";
import Invoices from "./pages/therapists/invoices";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="offcanvas-overlay"></div>
        <div className="wrapper">
          {/* <TopNav /> */}
          <div className="main-wrapper">
            {/* <Nav /> */}
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route
                exact
                path="/therapist-registration"
                element={<TherapistRegistration />}
              />
              <Route
                exact
                path="/therapist-dashboard"
                element={<TherapistDashboard />}
              />

              <Route
                exact
                path="/instructor/instructor-profile"
                element={<Appointment />}
              />

              <Route
                path="/instructor/instructor-enrolled-course"
                element={<Invoices />}
              />

              <Route exact path="/settings" element={<ProfileSettings />} />
              <Route
                exact
                path="/change-password"
                element={<ChangePassword />}
              />
              <Route exact path="/auth/success" element={<Success />} />

              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services/:id" element={<Services />} />
              <Route path="/view-profile/:id" element={<ViewProfile />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/faqs" element={<FaqPage />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/my-dashboard" element={<UserDashboard />} />
              <Route path="/my-profile" element={<UserProfile />} />

              {/* <Route
                path="/users"
                element={
                  <ProtectedRoute>
                    <UserPage />
                  </ProtectedRoute>
                }
              /> */}
              <Route path="/" element={<HomePage />} />
              <Route path="/notfound" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
