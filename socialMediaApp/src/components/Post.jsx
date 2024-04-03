import { useContext } from "react";
import { PostListContext } from "../store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <>
      <div className="card text-center " style={{ margin: "20px" }}>
        <div className="card-header" style={{ backgroundColor: "skyblue" }}>
          <button style={{ float: "left" }}>{post.userId}</button>
          <span>{post.title}</span>
          <button
            style={{ float: "right" }}
            onClick={() => deletePost(post.id)}
          >
            Delete
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ color: "skyblue" }}>
            Description
          </h5>
          <p className="card-text" style={{ backgroundColor: "whitesmoke" }}>
            {post.body}
          </p>
          <p href="#" style={{ color: "orange" }}>
            {post.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </p>
        </div>
        <div
          className="card-footer text-body-secondary"
          style={{ color: "red" }}
        >
          {post.reactions} Likes
        </div>
      </div>
    </>
  );
};
export default Post;
