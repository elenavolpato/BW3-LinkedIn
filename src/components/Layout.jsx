// components/Layout.jsx (crealo nuovo)
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";

export default function Layout() {
  const location = useLocation();
  const noTopBar = ["/login", "/jobs"];

  const show = !noTopBar.includes(location.pathname);

  return (
    <>
      {show && <TopBar />}
      <Outlet />
    </>
  );
}
