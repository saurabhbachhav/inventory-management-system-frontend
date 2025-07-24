import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-[#003366] text-white px-6 py-4 flex justify-between items-center shadow-md">
      <span className="text-xl font-bold tracking-wide">📦 IMS</span>
      <div className="flex space-x-3">
        <button
          onClick={() => navigate("/dashboard")}
          className="border border-white hover:bg-white hover:text-[#003366] transition-all duration-200 px-4 py-1 rounded"
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/add-product")}
          className="border border-white hover:bg-white hover:text-[#003366] transition-all duration-200 px-4 py-1 rounded"
        >
          Add Product
        </button>
        <button
          onClick={handleLogout}
          className="border border-white hover:bg-red-500 hover:border-red-500 transition-all duration-200 px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
