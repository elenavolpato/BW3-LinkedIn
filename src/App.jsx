import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./routes/Feed";
import Profile from "./routes/Profile";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginAuth from "./components/LoginAuth";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* Pagine senza TopBar */}
            <Route path="/login" element={<LoginAuth />} />

            {/* Tutto il resto con TopBar */}
            <Route element={<Layout />}>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Feed />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
