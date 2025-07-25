import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E6F0FF] to-[#99CCFF] px-4">
      <div className="text-center max-w-lg bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-[#003366] mb-4">
          📦 Inventory Management System
        </h1>
        <p className="text-gray-700 text-md mb-6">
          Manage your stock, products, and inventory effortlessly. Secure login,
          real-time updates, and clean UI to help you focus on what matters
          most.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-[#0066CC] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#004C99] transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="border border-[#0066CC] text-[#0066CC] px-6 py-2 rounded-lg font-semibold hover:bg-[#E6F0FF] transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
