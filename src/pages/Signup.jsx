import React from "react";
import { useState } from "react";
import { useNavigate ,Link } from "react-router-dom";
import API from "../api";
import { toast } from "react-toastify";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/register", { username, password });
      toast.success("User created! Please log in. 🎉 ");
      navigate("/login");
    } catch (err) {
      toast.error("User already exists or error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E6F0FF] to-[#99CCFF] px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-[#003366] mb-6">
          📝 Sign Up
        </h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-[#003366] mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#003366] mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0066CC] text-white py-2 rounded-lg font-semibold hover:bg-[#004C99] transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#0066CC] font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
