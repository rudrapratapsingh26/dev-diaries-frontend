import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-900">
          Dev Diaries
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-gray-500">
                Hey, {user.username}
              </span>
              <Link
                to="/my-posts"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                My Posts
              </Link>
              <Link
                to="/create"
                className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Write
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
