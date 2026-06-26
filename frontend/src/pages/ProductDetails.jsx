import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">

        <div className="grid md:grid-cols-2 gap-10">

          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl shadow-lg"
          />

          <div>

            <h1 className="text-5xl font-bold">
              {product.name}
            </h1>

            <p className="text-gray-500 mt-3">
              {product.category}
            </p>

            <p className="text-blue-600 text-3xl font-bold mt-5">
              ₹{product.rent}/month
            </p>

            <p className="mt-3">
              Security Deposit:
              ₹{product.deposit}
            </p>

            <h3 className="mt-6 text-xl font-bold">
              Rental Tenure
            </h3>

            <div className="flex gap-4 mt-3">

              <button className="border px-4 py-2 rounded">
                3 Months
              </button>

              <button className="border px-4 py-2 rounded">
                6 Months
              </button>

              <button className="border px-4 py-2 rounded">
                12 Months
              </button>

            </div>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl mt-8">
              Add To Cart
            </button>

          </div>

        </div>

      </div>
    </>
  );
}