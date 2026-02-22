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
    queryKey: ["posts"],  
    queryFn: fetchPosts,

    // caching config
    staleTime: 1000 * 60 * 5,          // fresh data for 5 minutes
    cacheTime: 1000 * 60 * 10,         // Cache for 10 minutes
    refetchOnWindowFocus: false,       // Prevent auto refetch 
    keepPreviousData: true,            // Old data during refetch
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