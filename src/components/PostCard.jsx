import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm text-gray-500">{post.author?.username}</span>
        <span className="text-gray-300">•</span>
        <span className="text-sm text-gray-500">
          {new Date(post.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

      <Link to={`/posts/${post.slug}`}>
        <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-gray-600 transition-colors">
          {post.title}
        </h2>
      </Link>

      <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.content}</p>

      <div className="flex items-center justify-between">
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${
            post.status === "published"
              ? "bg-green-50 text-green-700"
              : "bg-yellow-50 text-yellow-700"
          }`}
        >
          {post.status}
        </span>

        <Link
          to={`/posts/${post.slug}`}
          className="text-sm text-gray-900 font-medium hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
