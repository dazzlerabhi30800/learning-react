import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "./api/Posts";

function PostList1() {
  const postQuery = useQuery({
    queryKey: ["posts"],
    // queryFn: () => Promise.reject("An Error Occured!"),
    queryFn: getPosts,
    // refetchInterval: 1000,
    // initialData: [{ id: 1, title: "Initial Data" }],
    placeholderData: [{ id: 1, title: "Initial Data" }],
  });

  console.log(postQuery.status);

  if (postQuery.status === "loading") return <h1>Loading...</h1>;
  if (postQuery.status === "error")
    return <h1>{JSON.stringify(postQuery.error)}</h1>;

  return (
    <>
      <h1>Post List 1</h1>
      <ol>
        {postQuery.data.map(({ id, title }, index) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default PostList1;
