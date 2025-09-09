import { useContext } from "react";
import { CartContext } from "@/pages/_app";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
