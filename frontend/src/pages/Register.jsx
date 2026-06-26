import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-slate-100">

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl w-[450px]"
        >
          <h2 className="text-3xl font-bold mb-6">
            Create Account
          </h2>

          <input
            placeholder="Full Name"
            className="border p-3 w-full mb-4 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Email"
            className="border p-3 w-full mb-4 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 w-full mb-4 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border p-3 w-full mb-4 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                confirmPassword:
                  e.target.value,
              })
            }
          />

          <button className="bg-green-600 text-white w-full py-3 rounded-lg">
            Register
          </button>

        </form>

      </div>
    </>
  );
}