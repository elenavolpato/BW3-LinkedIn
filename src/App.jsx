import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Feed from "./routes/Feed"
import Profile from "./routes/Profile"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import ProtectedRoute from "./components/ProtectedRoute"
import TopBar from "./components/TopBar"
import LoginAuth from "./components/LoginAuth"

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route
              path="/login"
              element={<LoginAuth />}
            />
            <Route element={<ProtectedRoute />}>
              <Route
                path="/"
                element={<Feed />}
              />
              <Route
                path="/profile"
                element={<Profile />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
