import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">

        <h3 className="text-2xl font-bold">
          {product.name}
        </h3>

        <p className="text-gray-500">
          {product.category}
        </p>

        <p className="mt-3 text-blue-600 font-bold text-xl">
          ₹{product.rent}/month
        </p>

        <p className="text-gray-600">
          Deposit ₹{product.deposit}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}