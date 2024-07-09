import React from "react";
import { getDecodedToken } from "./jwt";
import NotAuthorizedPage from "../pages/not-authorized";

const TherapistProtectedRoute = ({ children }) => {
  const data = getDecodedToken();
  if (data && data.role === 1) {
    return children;
  }
  return <NotAuthorizedPage />;
};

export default TherapistProtectedRoute;
