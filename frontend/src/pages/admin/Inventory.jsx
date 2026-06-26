import Navbar from "../../components/Navbar";

export default function Inventory() {
  const inventory = [
    {
      id: 1,
      product: "Premium Bed",
      total: 20,
      available: 12,
      rented: 7,
      maintenance: 1,
    },
    {
      id: 2,
      product: "Smart TV",
      total: 15,
      available: 8,
      rented: 5,
      maintenance: 2,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          Inventory Management
        </h1>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">

          <table className="w-full">

            <thead className="bg-green-600 text-white">

              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Total</th>
                <th className="p-4">Available</th>
                <th className="p-4">Rented</th>
                <th className="p-4">Maintenance</th>
              </tr>

            </thead>

            <tbody>

              {inventory.map((item) => (
                <tr
                  key={item.id}
                  className="border-b text-center"
                >
                  <td className="p-4">
                    {item.product}
                  </td>

                  <td className="p-4">
                    {item.total}
                  </td>

                  <td className="p-4 text-green-600 font-bold">
                    {item.available}
                  </td>

                  <td className="p-4 text-blue-600 font-bold">
                    {item.rented}
                  </td>

                  <td className="p-4 text-red-600 font-bold">
                    {item.maintenance}
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