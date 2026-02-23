import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          {/* <Route path="/" element={} />
          <Route path="/profile" element={} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
