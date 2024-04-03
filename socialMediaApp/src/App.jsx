import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import PostListContextProvider from "./store/Post-list-store";

function App() {
  const [display, setDisplay] = useState("Home");
  return (
    <>
      <PostListContextProvider>
        <SideBar display={display} setDisplay={setDisplay}></SideBar>

        {display === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
      </PostListContextProvider>
    </>
  );
}

export default App;
