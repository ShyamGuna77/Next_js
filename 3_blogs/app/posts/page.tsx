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
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {posts.map((post:any) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <h2 className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer mb-4">
              {post.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
