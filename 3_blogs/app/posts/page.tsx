const Page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header title="Blog Posts" />
      <PostGrid posts={data} />
    </div>
  );
};

const Header = ({ title }: { title: string }) => (
  <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
    {title}
  </h1>
);

const PostGrid = ({ posts }: { posts: any[] }) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </ul>
);

const PostCard = ({ post }: { post: any }) => (
  <li className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
  </li>
);

export default Page;