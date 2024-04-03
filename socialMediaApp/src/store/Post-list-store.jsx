import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postListItems: [],
  addPost: () => {},
  addInitialPosts: () => {},
  removePost: () => {},
});

const postListReducer = (currState, action) => {
  let newPostList = currState;
  if (action.type === "DELETE_POST") {
    newPostList = currState.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currState];
  }
  return newPostList;
};

const PostListContextProvider = ({ children }) => {
  const [postListItems, dispatchPostListItems] = useReducer(
    postListReducer,
    []
  );
  const addPost = (userId, title, body, reactions, tags) => {
    dispatchPostListItems({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId,
        title,
        body,
        reactions,
        tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostListItems({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostListItems({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{
        postListItems,
        addPost,
        addInitialPosts,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListContextProvider;
