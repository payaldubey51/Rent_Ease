import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const userId = "guest";

  // 📥 GET CART ITEMS FROM BACKEND
  const fetchCart = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/cart/${userId}`
      );
      const data = await res.json();

      console.log("CART DATA:", data);

      setCartItems(data);
    } catch (error) {
      console.log("FETCH ERROR:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ❌ REMOVE ITEM
  const removeItem = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/cart/${id}`, {
        method: "DELETE",
      });

      fetchCart(); // refresh cart
    } catch (error) {
      console.log("DELETE ERROR:", error);
    }
  };

  // 💰 TOTAL PRICE (FIXED)
  const total = cartItems.reduce((sum, item) => {
    return sum + (item.price || 0);
  }, 0);

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          My Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <>
            <div className="grid gap-6">

              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between bg-white shadow p-4 rounded-xl"
                >

                  {/* LEFT SIDE */}
                  <div className="flex items-center gap-4">

                    <img
                      src={item.img}
                      className="w-20 h-20 object-cover rounded"
                      alt={item.name}
                    />

                    <div>
                      <h2 className="font-bold">
                        {item.name}
                      </h2>

                      <p className="text-gray-500">
                        ₹{item.price}
                      </p>

                      <p className="text-sm text-gray-400">
                        Deposit: ₹{item.deposit}
                      </p>
                    </div>

                  </div>

                  {/* REMOVE BUTTON */}
                  <button
                    onClick={() => removeItem(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>

                </div>
              ))}

            </div>

            {/* TOTAL */}
            <div className="mt-10 text-right">
              <h2 className="text-2xl font-bold">
                Total: ₹{total}
              </h2>
            </div>
          </>
        )}
      </div>
    </>
  );
}