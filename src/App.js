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
              <Route exact path="/auth/login" element={<Login />} />

              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
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
