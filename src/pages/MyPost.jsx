import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/axios";

const MyPosts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const response = await api.get("/posts/my-posts");
        setPosts(response.data.data);
      } catch (err) {
        setError("Failed to fetch your posts");
      } finally {
        setLoading(false);
      }
    };

    fetchMyPosts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      await api.delete(`/posts/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (err) {
      setError("Failed to delete post");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <p className="text-gray-500">Loading your posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
        {error}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-64 gap-3">
        <p className="text-gray-500 text-lg">No posts yet</p>
        <Link
          to="/create"
          className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Write your first post
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Posts</h1>
        <Link
          to="/create"
          className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Write New Post
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-between"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-semibold text-gray-900">
                {post.title}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">
                  {new Date(post.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    post.status === "published"
                      ? "bg-green-50 text-green-700"
                      : "bg-yellow-50 text-yellow-700"
                  }`}
                >
                  {post.status}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to={`/posts/${post.slug}`}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                View
              </Link>
              <Link
                to={`/edit/${post._id}`}
                className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-200"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(post._id)}
                className="text-sm bg-red-50 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-100"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;

