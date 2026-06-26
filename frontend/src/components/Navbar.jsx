import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          RentEase
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-blue-600 transition"
          >
            Products
          </Link>

          <Link
            to="/support"
            className="hover:text-blue-600 transition"
          >
            Support
          </Link>

          <Link
            to="/rentals"
            className="hover:text-blue-600 transition"
          >
            My Rentals
          </Link>

          <Link
            to="/history"
            className="hover:text-blue-600 transition"
          >
            History
          </Link>
          <Link
  to="/admin"
  className="hover:text-blue-600"
>
  Admin
</Link>

          <Link
            to="/cart"
            className="relative hover:text-blue-600 transition"
          >
            Cart

            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-3">

          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Register
          </Link>

        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-2xl">
            ☰
          </button>
        </div>

      </div>
    </nav>
  );
}