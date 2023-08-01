import { useQuery } from "@tanstack/react-query";
import { getPost } from "./api/Posts";
import { getUser } from "./api/users";

export default function Post({ id }) {
  const postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });

  const userQuery = useQuery({
    queryKey: ["users", postQuery?.data?.userId],
    enabled: postQuery?.data?.userId !== null,
    queryFn: () => getUser(postQuery.data.userId),
  });

  if (postQuery.status === "loading") return <h1>Loading...</h1>;
  if (postQuery.status === "error")
    return <h1>{JSON.stringify(postQuery.error)}</h1>;

  return (
    <>
      <h1>{postQuery.data.title}</h1>
      <small>{postQuery.data.id}</small>
      <p>{postQuery.data.body}</p>
      <small>
        {userQuery.isLoading
          ? "Loading User..."
          : userQuery.isError
          ? "Error Loading User"
          : userQuery.data.name}
      </small>
    </>
  );
}
