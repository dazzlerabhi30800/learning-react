import React, { useState } from "react";
import "./App.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PostList1 from "./PostList1";
import PostList2 from "./PostList2";
import Post from "./Post";
import CreatePost from "./CreatePost";

const Posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

function App() {
  const [currentPage, setCurrentPage] = useState(<PostList1 />);
  return (
    <>
      <button onClick={() => setCurrentPage(<PostList1 />)}>Post List 1</button>
      <button onClick={() => setCurrentPage(<PostList2 />)}>Post List 2</button>
      <button onClick={() => setCurrentPage(<Post id={2} />)}>
        First Post
      </button>
      <button onClick={() => setCurrentPage(<CreatePost />)}>
        Create Post
      </button>
      <br />
      {currentPage}
    </>
  );
}

export default App;
