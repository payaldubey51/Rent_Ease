import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Modern Sofa",
    price: 1200,
    deposit: 300,
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Wooden Bed",
    price: 1500,
    deposit: 400,
    img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Office Chair",
    price: 800,
    deposit: 200,
    img: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Dining Table",
    price: 1800,
    deposit: 500,
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "TV Unit",
    price: 1100,
    deposit: 300,
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Study Desk",
    price: 900,
    deposit: 250,
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Bookshelf",
    price: 700,
    deposit: 200,
    img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Recliner Chair",
    price: 1300,
    deposit: 350,
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Kitchen Table",
    price: 1400,
    deposit: 400,
    img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Wardrobe",
    price: 2000,
    deposit: 600,
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Coffee Table",
    price: 950,
    deposit: 250,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Shoe Rack",
    price: 600,
    deposit: 150,
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    name: "Bedside Table",
    price: 500,
    deposit: 120,
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    name: "Storage Cabinet",
    price: 1700,
    deposit: 450,
    img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    name: "Floor Lamp",
    price: 400,
    deposit: 100,
    img: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Home() {
  const { addToCart } = useCart();

const handleAddToCart = async (item) => {
  try {
    const userId = localStorage.getItem("userId") || "guest";

    const payload = {
      userId,
      productId: item.id,
      name: item.name,
      price: item.price,
      deposit: item.deposit,
      img: item.img,
    };

    // ✅ CREATE res properly
    const res = await fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // 🔥 now res exists
    const data = await res.json();

    console.log("STATUS:", res.status);
    console.log("RESPONSE:", data);

    alert("Added to cart!");

    addToCart(payload);

  } catch (error) {
    console.log("Error:", error);
  }
};

  return (
    <>
      <Navbar />

      <main className="pt-20 bg-gray-50">

        {/* HERO */}
        <section className="relative bg-gradient-to-r from-blue-950 via-indigo-900 to-purple-900 text-white py-28 px-6 text-center overflow-hidden">

          <div className="max-w-5xl mx-auto">

            <h1 className="text-4xl md:text-6xl font-extrabold">
              Rent Furniture & Appliances
            </h1>

            <p className="mt-5 text-lg text-white/80">
              Affordable monthly rentals delivered to your doorstep
            </p>

           

            <button className="mt-8 bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
              Explore Collection
            </button>

          </div>

          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

        </section>

        {/* PRODUCTS */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Featured Rentals
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">

            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition"
              >

                <img
                  src={item.img}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">

                  <h3 className="font-semibold text-gray-800">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    ₹{item.price}/month
                  </p>

                  <p className="text-xs text-gray-400">
                    Deposit ₹{item.deposit}
                  </p>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition"
                  >
                    Add to Cart
                  </button>

                </div>
              </div>
            ))}

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}