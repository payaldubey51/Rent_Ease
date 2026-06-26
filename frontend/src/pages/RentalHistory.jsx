import Navbar from "../components/Navbar";

export default function RentalHistory() {
  const rentals = [
    {
      id: 1,
      product: "Premium Bed",
      startDate: "01-06-2025",
      endDate: "01-12-2025",
      status: "Active",
    },
    {
      id: 2,
      product: "Smart TV",
      startDate: "01-01-2025",
      endDate: "01-05-2025",
      status: "Completed",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          Rental History
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">

              <tr>
                <th className="p-4 text-left">
                  Product
                </th>

                <th className="p-4 text-left">
                  Start Date
                </th>

                <th className="p-4 text-left">
                  End Date
                </th>

                <th className="p-4 text-left">
                  Status
                </th>
              </tr>

            </thead>

            <tbody>

              {rentals.map((item) => (
                <tr
                  key={item.id}
                  className="border-b"
                >
                  <td className="p-4">
                    {item.product}
                  </td>

                  <td className="p-4">
                    {item.startDate}
                  </td>

                  <td className="p-4">
                    {item.endDate}
                  </td>

                  <td className="p-4">
                    {item.status}
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