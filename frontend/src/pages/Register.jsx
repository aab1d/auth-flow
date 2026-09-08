import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await registerUser(username, role, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-amber-100 p-8 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-3xl font-semibold text-gray-800">Register</h2>
        <hr className="w-full border-t border-gray-500" />
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="border rounded-2xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-lime-600"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded-2xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-lime-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded-2xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-600"
        >
          <option value="" disabled>
            Select a role
          </option>
          <option value="user">User</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="rounded-full bg-emerald-500 text-white px-6 py-2 hover:bg-emerald-700 cursor-pointer focus:outline-none focus:ring-1 focus:ring-lime-600"
        >
          Register
        </button>
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
