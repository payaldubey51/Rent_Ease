import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";
import Inventory from "./pages/admin/Inventory";
import ProductManagement from "./pages/admin/ProductManagement";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyRentals from "./pages/MyRentals";
import Support from "./pages/Support";
import RentalHistory from "./pages/RentalHistory";
import RentalManagement from "./pages/admin/RentalManagement";
import Reports from "./pages/admin/Reports";
function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/cart"
        element={<Cart />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/rentals"
        element={<MyRentals />}
      />

      <Route
        path="/support"
        element={<Support />}
      />

      <Route
        path="/history"
        element={<RentalHistory />}
      />
<Route
  path="/admin"
  element={<Dashboard />}
/>
<Route
  path="/admin/products"
  element={<ProductManagement />}
/>
<Route
  path="/admin/inventory"
  element={<Inventory />}
/>
<Route
  path="/admin/users"
  element={<UserManagement />}
/>
<Route
  path="/admin/rentals"
  element={<RentalManagement />}
/>
<Route
  path="/admin/reports"
  element={<Reports />}
/>
    </Routes>
  );
}

export default App;