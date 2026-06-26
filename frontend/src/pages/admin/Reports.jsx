import Navbar from "../../components/Navbar";

export default function Reports() {
  const stats = [
    {
      title: "Total Revenue",
      value: "₹2,50,000",
    },
    {
      title: "Total Rentals",
      value: 120,
    },
    {
      title: "Active Rentals",
      value: 45,
    },
    {
      title: "Users",
      value: 350,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          Reports & Analytics
        </h1>

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-gray-500">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-blue-600 mt-2">
                {item.value}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">
            Recent Rentals
          </h2>

          <table className="w-full">

            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3">User</th>
                <th className="p-3">Product</th>
                <th className="p-3">Amount</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">Gaurav</td>
                <td className="p-3">Premium Bed</td>
                <td className="p-3">₹999</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Rahul</td>
                <td className="p-3">Smart TV</td>
                <td className="p-3">₹1299</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}