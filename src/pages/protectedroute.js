import React from "react";
import { Navigate } from "react-router-dom";

import auth from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  if (auth.getToken()) {
    return children;
  }
  return <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
