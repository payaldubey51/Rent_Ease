import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function RentalManagement() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/rentals")
      .then((res) => res.json())
      .then((data) => setRentals(data))
      .catch((err) =>
        console.log("Error:", err)
      );
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          Rental Management
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">

              <tr>
                <th className="p-4">User</th>
                <th className="p-4">Product</th>
                <th className="p-4">Tenure</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>

            </thead>

            <tbody>

              {rentals.map((rental) => (
                <tr
                  key={rental._id}
                  className="border-b text-center"
                >
                  <td className="p-4">
                    {rental.user?.name || "N/A"}
                  </td>

                  <td className="p-4">
                    {rental.product?.name || "N/A"}
                  </td>

                  <td className="p-4">
                    {rental.tenure} Months
                  </td>

                  <td className="p-4">
                    {rental.status}
                  </td>

                  <td className="p-4 flex justify-center gap-2">

                    <button className="bg-green-600 text-white px-3 py-1 rounded">
                      Approve
                    </button>

                    <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                      Complete
                    </button>

                    <button className="bg-red-600 text-white px-3 py-1 rounded">
                      Cancel
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}