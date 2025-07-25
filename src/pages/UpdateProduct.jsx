import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";
import { toast } from "react-toastify";

function UpdateProduct() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState("");
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get("/products");
        const found = res.data.find((p) => p._id === id);
        if (!found) {
          toast.error("Product not found");
          return navigate("/dashboard");
        }
        setProduct(found);
        setQuantity(found.quantity); // Pre-fill quantity
      } catch (err) {
        toast.error("Error fetching product");
        navigate("/dashboard");
      }
    };

    fetchProduct();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/products/${id}/quantity`, {
        quantity: parseInt(quantity),
      });
      toast.success("Product quantity updated!");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Error updating quantity");
    }
  };

  if (!product) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E6F0FF] to-[#99CCFF] px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">
          🔄 Update Quantity
        </h2>

        {/* Product Info */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={
              product.image_url?.replace(/"/g, "") ||
              "https://img.icons8.com/ios-filled/50/box.png"
            }
            alt={product.name}
            className="w-16 h-16 object-cover rounded shadow"
            onError={(e) =>
              (e.target.src = "https://img.icons8.com/ios-filled/50/box.png")
            }
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500">
              Type: {product.type} | SKU: {product.sku}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Current Qty:{" "}
              <span className="font-medium text-[#003366]">
                {product.quantity}
              </span>
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-[#003366] mb-1"
            >
              New Quantity
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter new quantity"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0066CC] text-white py-2 rounded-lg font-semibold hover:bg-[#004C99] transition duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
