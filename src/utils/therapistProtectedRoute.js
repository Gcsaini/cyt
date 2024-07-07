import React from "react";
import { Navigate } from "react-router-dom";
import { getDecodedToken } from "./jwt";

const TherapistProtectedRoute = ({ children }) => {
  const data = getDecodedToken();
  if (data && data.role === 1) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default TherapistProtectedRoute;
