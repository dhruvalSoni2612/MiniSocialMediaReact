import { useContext, useRef } from "react";
import { PostListContext } from "../store/Post-list-store";

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
    <center>
      <form style={{ margin: "50px" }} onSubmit={handelOnClick}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input type="text" id="userId" ref={userIdInputElement} />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" id="title" ref={titleInputElement} />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input type="text" id="description" ref={bodyInputElement} />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input type="text" id="reactions" ref={reactionsInputElement} />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input type="text" id="tags" ref={tagsInputElement} />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </center>
  );
};
export default CreatePost;
