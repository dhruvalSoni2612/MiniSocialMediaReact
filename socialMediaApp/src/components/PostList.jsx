import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/Post-list-store";
import EmptyMsg from "./EmptyMsg";
import Loading from "./Loading";

const PostList = () => {
  const { postListItems, addInitialPosts } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      })
      .catch(() => setFetching(false));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="container" style={{ margin: "30px auto" }}>
      {fetching && <Loading />}
      {!fetching && postListItems.length === 0 && <EmptyMsg />}
      {!fetching &&
        postListItems.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
