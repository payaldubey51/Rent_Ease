import Navbar from "../../components/Navbar";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Users",
      value: 120,
    },
    {
      title: "Products",
      value: 35,
    },
    {
      title: "Active Rentals",
      value: 54,
    },
    {
      title: "Revenue",
      value: "₹1,25,000",
    },
    {
      title: "Maintenance Requests",
      value: 7,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          Admin Dashboard
        </h1>

        {/* Stats Cards */}

        <div className="grid md:grid-cols-3 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-gray-500 text-lg">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-blue-600 mt-2">
                {item.value}
              </p>
            </div>
          ))}

        </div>

        {/* Quick Actions */}

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="/admin/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Product Management
          </a>

          <a
            href="/admin/inventory"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Inventory Management
          </a>
          <a
  href="/admin/users"
  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
>
  User Management
</a>
<a
  href="/admin/rentals"
  className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
>
  Rental Management
</a>
<a
  href="/admin/reports"
  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
>
  Reports & Analytics
</a>

        </div>

      </div>
    </>
  );
}