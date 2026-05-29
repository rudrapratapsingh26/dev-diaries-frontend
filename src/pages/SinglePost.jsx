import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../utils/axios";
import { useAuth } from "../context/AuthContext";

const SinglePost = () => {
  const { slug } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${slug}`);
        setPost(response.data.data);
      } catch (err) {
        setError("Post not found");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      await api.delete(`/posts/${post._id}`);
      navigate("/");
    } catch (err) {
      setError("Failed to delete post");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <p className="text-gray-500">Loading post...</p>
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

  const isAuthor = user?._id === post?.author?._id;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm text-gray-500">{post.author?.username}</span>
        <span className="text-gray-300">•</span>
        <span className="text-sm text-gray-500">
          {new Date(post.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ml-2 ${
            post.status === "published"
              ? "bg-green-50 text-green-700"
              : "bg-yellow-50 text-yellow-700"
          }`}
        >
          {post.status}
        </span>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>

      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full rounded-lg mb-6 object-cover max-h-64"
        />
      )}

      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-8">
        {post.content}
      </p>

      {isAuthor && (
        <div className="flex items-center gap-3 border-t border-gray-200 pt-6">
          <Link
            to={`/edit/${post._id}`}
            className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Edit Post
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg hover:bg-red-100"
          >
            Delete Post
          </button>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
