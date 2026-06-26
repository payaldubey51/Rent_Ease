import Navbar from "../components/Navbar";

export default function Support() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          Maintenance Support
        </h1>

        <form className="bg-white shadow-lg rounded-xl p-6">

          <input
            type="text"
            placeholder="Product Name"
            className="w-full border p-3 rounded mb-4"
          />

          <select className="w-full border p-3 rounded mb-4">
            <option>Select Issue</option>
            <option>Damaged</option>
            <option>Not Working</option>
            <option>Installation Issue</option>
            <option>Other</option>
          </select>

          <textarea
            rows="5"
            placeholder="Describe the issue"
            className="w-full border p-3 rounded mb-4"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Submit Request
          </button>

        </form>

      </div>
    </>
  );
}