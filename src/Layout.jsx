import React from "react";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const hideNavbar = ["/login", "/signup"].includes(location.pathname);

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Outlet />
    </div>
  );
}

export default Layout;
