import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-950 to-black text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl font-bold">
            RentEase
          </h2>

          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Premium furniture & appliance rentals delivered to your home at affordable monthly prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link to="/rentals" className="hover:text-white">My Rentals</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Refund Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <p className="text-sm">📍 Nallasopara, India</p>
          <p className="text-sm mt-2">📧 support@rentease.com</p>
          <p className="text-sm mt-2">📞 +91 999999999</p>

          {/* Social */}
          <div className="flex gap-4 mt-4 text-white">
            <span className="hover:text-blue-400 cursor-pointer">FB</span>
            <span className="hover:text-pink-400 cursor-pointer">IG</span>
            <span className="hover:text-blue-300 cursor-pointer">TW</span>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RentEase. Built with ❤️ for modern living.
      </div>

    </footer>
  );
}