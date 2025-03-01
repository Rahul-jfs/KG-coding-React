import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card mb-3" style={{ width: "28rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <RxCross1 />
          <span className="visually-hidden">unread messages</span>
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary m-1">
            {tag}
          </span>
        ))}
        <div className="alert alert-success mt-2 mb-0" role="alert">
          This post has been reacted by {post.views} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
