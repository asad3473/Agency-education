// components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../contextApi/contextApi";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
