import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "./api/Posts";

function PostList2() {
  const queryClient = useQueryClient();
  const postQuery = useQuery({
    queryKey: ["posts"],
    // queryFn: () => Promise.reject("An Error Occured!"),
    queryFn: getPosts,
  });

  if (postQuery.isLoading) return <h1>Loading...</h1>;
  if (postQuery.isError) return <h1>{JSON.stringify(postQuery.error)}</h1>;

  return (
    <>
      <h1>Post List 2</h1>
      <ol>
        {postQuery.data.map(({ id, title }, index) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
}

export default PostList2;
