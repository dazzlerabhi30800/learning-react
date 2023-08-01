import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { createPost } from "./api/Posts";

export default function CreatePost() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const createPostMutation = useMutation({
    mutationFn: createPost,
  });

  function handleSubmit(e) {
    e.preventDefault();
    createPostMutation.mutate({
      title: titleRef.current.value,
      body: bodyRef.current.value,
    });
  }

  return (
    <div>
      {createPostMutation.isError && JSON.stringify(error)}
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input id="body" ref={bodyRef} />
        </div>
        <button disabled={createPostMutation.isLoading}>
          {createPostMutation.isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
}
