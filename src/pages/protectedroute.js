import { getDecodedToken } from "../utils/jwt";
import NotAuthorizedPage from "./not-authorized";

const ProtectedRoute = ({ children }) => {
  const data = getDecodedToken();
  if (data && data.role === 0) {
    return children;
  }
  return <NotAuthorizedPage />;
};

export default ProtectedRoute;
