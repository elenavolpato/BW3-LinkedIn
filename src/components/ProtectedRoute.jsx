import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  // Se non c'è token → vai al login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Se c'è token → mostra la pagina (Outlet = il contenuto della rotta)
  return <Outlet />;
};

export default ProtectedRoute;
