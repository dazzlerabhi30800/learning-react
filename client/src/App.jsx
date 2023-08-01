import React, { useState } from "react";
import "./App.css";
import PostList1 from "./PostList1";
import PostList2 from "./PostList2";
import Post from "./Post";
import CreatePost from "./CreatePost";
import { PostListPaginated } from "./PostListPaginated";
import { PostListInfinite } from "./PostListInfinite";
import { useQueryClient } from "@tanstack/react-query";
import { getPost } from "./api/Posts";

function App() {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(<PostList1 />);
  const onHoverPostOneLink = () => {
    queryClient.prefetchQuery({
      queryKey: ["posts", 1],
      queryFn: () => getPost(1),
    });
  };
  return (
    <>
      <button onClick={() => setCurrentPage(<PostList1 />)}>Post List 1</button>
      <button onClick={() => setCurrentPage(<PostList2 />)}>Post List 2</button>
      <button
        onMouseEnter={onHoverPostOneLink}
        onClick={() => setCurrentPage(<Post id={2} />)}
      >
        First Post
      </button>
      <button
        onClick={() =>
          setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)
        }
      >
        Create Post
      </button>
      <button onClick={() => setCurrentPage(<PostListPaginated />)}>
        Post List Paginated
      </button>
      <button onClick={() => setCurrentPage(<PostListInfinite />)}>
        Post List Infinite
      </button>
      <br />
      {currentPage}
    </>
  );
}

export default App;
