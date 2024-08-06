import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/Post-list-store";
import styles from "./CreatePost.module.css"; // Import the CSS Module

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdInputElement = useRef();
  const titleInputElement = useRef();
  const bodyInputElement = useRef();
  const reactionsInputElement = useRef();
  const tagsInputElement = useRef();

  let handelOnClick = (event) => {
    event.preventDefault();
    const userId = userIdInputElement.current.value;
    const title = titleInputElement.current.value;
    const body = bodyInputElement.current.value;
    const reactions = reactionsInputElement.current.value;
    const tags = tagsInputElement.current.value.split(" ");

    userIdInputElement.current.value = "";
    titleInputElement.current.value = "";
    bodyInputElement.current.value = "";
    reactionsInputElement.current.value = "";
    tagsInputElement.current.value = "";

    addPost(userId, title, body, reactions, tags);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handelOnClick}>
        <div className="mb-3">
          <label htmlFor="userId" className={styles.formLabel}>
            User Id
          </label>
          <input type="text" id="userId" ref={userIdInputElement} />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className={styles.formLabel}>
            Title
          </label>
          <input type="text" id="title" ref={titleInputElement} />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className={styles.formLabel}>
            Description
          </label>
          <input type="text" id="description" ref={bodyInputElement} />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className={styles.formLabel}>
            Reactions
          </label>
          <input type="text" id="reactions" ref={reactionsInputElement} />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className={styles.formLabel}>
            Tags
          </label>
          <input type="text" id="tags" ref={tagsInputElement} />
        </div>

        <button type="submit" className={styles.btn}>
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
