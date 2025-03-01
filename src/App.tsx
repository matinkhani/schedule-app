import { RouterProvider } from "react-router-dom";
import { router } from "./core/routes";
import { AuthProvider } from "./store/authStore";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
