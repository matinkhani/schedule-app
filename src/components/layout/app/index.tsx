import { useAuth } from "@/store/authStore";
import { Navigate, Outlet } from "react-router-dom";

const AppLayout = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
