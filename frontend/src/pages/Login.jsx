import { useState } from "react";
import { loginUser } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await loginUser(username, password);
      localStorage.setItem("token", data.token);
      navigate("/me");
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
        <h2 className="text-3xl font-semibold text-gray-800 font-display">
          Login
        </h2>
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
        <button
          type="submit"
          className="rounded-full bg-emerald-500 text-white px-6 py-2 hover:bg-emerald-700 cursor-pointer focus:outline-none focus:ring-1 focus:ring-lime-600"
        >
          Login
        </button>
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
