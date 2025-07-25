import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../api";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Token expired. Please login again.");
        setTimeout(() => navigate("/login"), 500); // Avoid instant redirect loop
        return;
      }

      try {
        const res = await API.get("/products", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(res.data);
      } catch (error) {
        toast.error("Session expired or API error.");
        localStorage.removeItem("token");
        setTimeout(() => navigate("/login"), 500); // Also delayed
      }
    };

    fetchProducts();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#E6F0FF] p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-[#003366] mb-6 text-center">
          📦 Product Inventory
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">No products available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#0066CC] text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Price (₹)
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {products.map((p) => (
                  <tr key={p._id}>
                    <td className="px-6 py-3">
                      <img
                        src={
                          p.image_url?.replace(/"/g, "") ||
                          "https://img.icons8.com/ios-filled/50/box.png"
                        }
                        alt={p.name}
                        className="w-14 h-14 object-cover rounded-md shadow"
                        onError={(e) => {
                          e.target.src =
                            "https://img.icons8.com/ios-filled/50/box.png";
                        }}
                      />
                    </td>
                    <td className="px-6 py-3 font-medium text-gray-900">
                      {p.name}
                    </td>
                    <td className="px-6 py-3 text-gray-700">{p.quantity}</td>
                    <td className="px-6 py-3 text-gray-700">₹{p.price}</td>
                    <td className="px-6 py-3 text-center">
                      <button
                        onClick={() => navigate(`/update-product/${p._id}`)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg text-sm transition"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
