import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { toast } from "react-toastify";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    sku: "",
    image_url: "",
    description: "",
    quantity: 0,
    price: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/products", form);
      toast.success("Product added successfully!");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E6F0FF] to-[#99CCFF] px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-[#003366] mb-6">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { name: "name", label: "Product Name" },
            { name: "type", label: "Product Type" },
            { name: "sku", label: "SKU" },
            { name: "image_url", label: "Image URL" },
            { name: "description", label: "Description" },
            { name: "quantity", label: "Quantity", type: "number" },
            { name: "price", label: "Price", type: "number" },
          ].map(({ name, label, type = "text" }) => (
            <div key={name}>
              <label
                htmlFor={name}
                className="block text-sm font-medium text-[#003366] mb-1"
              >
                {label}
              </label>
              <input
                id={name}
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={label}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-[#0066CC] text-white py-2 rounded-lg font-semibold hover:bg-[#004C99] transition duration-300"
          >
            ➕ Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
