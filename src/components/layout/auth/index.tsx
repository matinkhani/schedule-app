import { useAuth } from "@/store/authStore";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
