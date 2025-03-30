import Link from "next/link";

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

const Blog = async () => {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-6">Blog Posts</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <h2 className="text-lg font-semibold text-blue-600 hover:underline">
                {post.title}
              </h2>
            
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
