import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Feed from "./routes/Feed"
import Profile from "./routes/Profile"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Feed />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
