import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMe } from "../api/auth";

const Me = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      try {
        const data = await getMe(token);
        setUser(data.user);
      } catch (err) {
        setError(err.message);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) return <p>{error}</p>;
  if (!user) return <p>Loading...</p>;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400 gap-4">
      <h2 className="text-4xl font-bold">Welcome</h2>
      <hr className="w-full border-t border-gray-500" />

      <p>User ID: {user.id}</p>
      <p>Role: {user.role}</p>
      <button
        className="rounded-full bg-emerald-500 text-black px-6 py-2 hover:bg-emerald-700 cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Me;
