import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

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
  }
];

export default function Products() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          Explore Rentals
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
}