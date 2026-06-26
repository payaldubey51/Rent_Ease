import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function ProductManagement() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          Product Management
        </h1>

        <table className="w-full bg-white shadow-lg">

          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
            </tr>
          </thead>

          <tbody>

            {products.map((product) => (
              <tr
                key={product._id}
                className="border-b"
              >
                <td className="p-3">
                  {product.name}
                </td>

                <td className="p-3">
                  {product.category}
                </td>

                <td className="p-3">
                  ₹{product.price}
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </>
  );
}