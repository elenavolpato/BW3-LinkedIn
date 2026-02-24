import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/loginAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  // Se già autenticato → redirect
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(username, password));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "380px" }}>
        <div className="text-center mb-4">
          <i className="bi bi-linkedin text-primary fs-1"></i>
          <h2 className="mt-2">Accedi</h2>
        </div>

        {error && <div className="alert alert-danger small">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="mariorossi" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password123" required />
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Accesso..." : "Accedi"}
          </button>
        </form>

        <div className="text-center mt-3 small text-muted">
          Credenziali di test:
          <br />
          epiclinkedin / LinkedinEpicode → il tuo profilo
          <br />
          lucaverdi / test456 → altro profilo
        </div>
      </div>
    </div>
  );
};

export default Login;
