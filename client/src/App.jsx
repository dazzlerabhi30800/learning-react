import React, { useState } from "react";
import "./App.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PostList1 from "./PostList1";
import PostList2 from "./PostList2";

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
      {currentPage}
    </>
  );
}

export default App;
