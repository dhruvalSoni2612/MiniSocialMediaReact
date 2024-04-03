import { useContext } from "react";
import { PostListContext } from "../store/Post-list-store";

const EmptyMsg = () => {
  const { postListItems } = useContext(PostListContext);
  return <center>{postListItems.length === 0 && <h2>No posts Yet</h2>}</center>;
};
export default EmptyMsg;
