import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Feed from "./routes/Feed"
import Profile from "./routes/Profile"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import TopBar from "./components/TopBar"

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <TopBar />
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
      </Provider>
    </>
  )
}

export default App
