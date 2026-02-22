import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],   // Enables caching
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>

      {/* Manual refetch button */}
      <button onClick={refetch}>Refetch Posts</button>

      {data.slice(0, 5).map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;