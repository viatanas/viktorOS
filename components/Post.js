// Absolute imports
import Link from "next/link";
import moment from "moment";

const Post = ({ post }) => {
  return (
    <div className="flex items-start space-x-2">
      <span className="w-2/12 text-sm font-light text-gray-400 font-inter">
        {moment(post.created_at).format("MMM D")}
      </span>

      <Link href={`/retrospectives/${post.slug}`}>
        <a className="flex items-center w-10/12 space-x-1 hover:underline">
          <span className="text-sm font-medium text-gray-900 font-inter">
            {post.title}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default Post;
