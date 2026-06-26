import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Checkout() {
  const [address, setAddress] = useState("");
  const [rentDuration, setRentDuration] = useState(1);

  const userId = "demoUser123";

  const placeOrder = async () => {
    await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        address,
        rentDuration,
      }),
    });

    alert("Order Placed Successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6">
          Checkout
        </h1>

        <input
          type="text"
          placeholder="Delivery Address"
          className="w-full border p-3 mb-4"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          type="number"
          min="1"
          max="12"
          className="w-full border p-3 mb-4"
          value={rentDuration}
          onChange={(e) => setRentDuration(e.target.value)}
        />

        <button
          onClick={placeOrder}
          className="w-full bg-green-600 text-white py-3 rounded"
        >
          Place Order
        </button>

      </div>
    </>
  );
}