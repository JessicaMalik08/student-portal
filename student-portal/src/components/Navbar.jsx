import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 bg-white shadow-md flex justify-between items-center px-6 py-4 z-10">
      <h1 className="text-xl font-bold">Student Portal</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/dashboard">Dashboard</Link>
        {user && <button onClick={logout}>Logout</button>}
      </div>
      {user && <span className="ml-4 font-semibold">{user.name}</span>}
    </nav>
  );
}
