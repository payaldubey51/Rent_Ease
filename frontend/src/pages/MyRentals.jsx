import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyRentals() {
  const [cart, setCart] = useState([]);

  const userId = localStorage.getItem("userId") || "guest";

  // 📥 LOAD FROM DATABASE
  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch(
        `http://localhost:5000/api/cart/${userId}`
      );

      const data = await res.json();
      setCart(data);
    };

    fetchCart();
  }, []);

  // ❌ REMOVE FROM DATABASE
  const removeItem = async (id) => {
    await fetch(`http://localhost:5000/api/cart/${id}`, {
      method: "DELETE",
    });

    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen bg-gray-50">

        {/* HEADER */}
        <section className="text-center py-10">
          <h1 className="text-4xl font-bold">My Rentals</h1>
          <p className="text-gray-500 mt-2">
            Your active rented furniture
          </p>
        </section>

        {/* SUMMARY */}
        {cart.length > 0 && (
          <div className="max-w-6xl mx-auto px-6 mb-8">
            <div className="bg-white shadow-md rounded-xl p-5 flex justify-between">
              <p>Total Items: {cart.length}</p>
              <p className="text-blue-600 font-bold">
                Monthly Total: ₹{total}
              </p>
            </div>
          </div>
        )}

        {/* CONTENT */}
        <section className="max-w-6xl mx-auto px-6 pb-16">

          {cart.length === 0 ? (
            <p className="text-center text-gray-500 mt-20">
              No rentals found 🪑
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

              {cart.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >

                  <img
                    src={item.img}
                    className="h-44 w-full object-cover"
                    alt={item.name}
                  />

                  <div className="p-5">

                    <h2 className="font-semibold text-lg">
                      {item.name}
                    </h2>

                    <p className="text-sm text-gray-500">
                      ₹{item.price}/month
                    </p>

                    <p className="text-sm text-gray-400">
                      Deposit ₹{item.deposit}
                    </p>

                    <button
                      onClick={() => removeItem(item._id)}
                      className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              ))}

            </div>
          )}

        </section>

      </main>

      <Footer />
    </>
  );
}