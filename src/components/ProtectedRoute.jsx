import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const profile = useSelector((state) => state.profile?.profile);
  const location = useLocation(); // ← questo è fondamentale

  // Se siamo già sulla pagina di login → non fare redirect infinito
  if (location.pathname === "/login") {
    return <Outlet />; // lascia passare
  }

  // Nessun token → vai al login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // C'è token ma manca profilo → forza redirect al login (per refresh)
  if (!profile) {
    console.log("Refresh: token esiste ma profilo no → redirect login");
    localStorage.removeItem("token"); // pulisci token per sicurezza
    return <Navigate to="/login" replace />;
  }

  // Tutto ok → mostra la pagina protetta
  return <Outlet />;
};

export default ProtectedRoute;
