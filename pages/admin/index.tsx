import { useState } from "react";
import { useRouter } from "next/router";

const ADMIN_PASSWORD = "rhinamic2024"; // For MVP only. In production, use env vars.

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("rhinamic_admin", "1");
      router.push("/admin/projects");
    } else {
      setError("Incorrect password.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg w-full max-w-sm border border-green-100">
        <h1 className="text-2xl font-semibold text-green-900 mb-6 text-center">Admin Login</h1>
        <label className="block mb-4">
          <span className="text-green-800">Password</span>
          <input
            type="password"
            className="mt-1 block w-full border border-green-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <div className="text-red-600 mb-4 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
