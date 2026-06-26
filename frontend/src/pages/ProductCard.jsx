import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAdd = async () => {
    const userId = localStorage.getItem("userId");

    // save to DB cart
    await fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        productId: product.id,
        name: product.name,
        price: product.price,
        deposit: product.deposit,
        img: product.img,
      }),
    });

    // optional UI update
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <img
        src={product.img}
        alt={product.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">

        <h3 className="text-lg font-semibold">
          {product.name}
        </h3>

        <p className="text-gray-600">
          ₹{product.price} / month
        </p>

        <p className="text-gray-500 text-sm">
          Deposit: ₹{product.deposit}
        </p>

        <button
          onClick={handleAdd}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}