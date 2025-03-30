import { notFound } from "next/navigation";
import Link from "next/link";

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}

type pageParams = {
  params: {
    id: string;
  };
};

export default async function PostPage({ params }: pageParams) {
  const postId = parseInt(params.id, 10);
  const post = await getPost(params.id);

  if (!post) return notFound(); // Handle invalid ID

  return (
    <div className="p-6 flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold text-center text-amber-600 bg-amber-200 p-4 rounded shadow-lg">
        {post.title}
      </h1>
      <p className="text-lg text-gray-700 bg-blue-100 p-4 rounded shadow-md">
        {post.body}
      </p>
      <div className="mt-6 flex justify-between w-full max-w-md">
        {postId > 1 && (
          <Link
            href={`/posts/${postId - 1}`}
            className="text-blue-500 hover:underline"
          >
            ← Previous Post
          </Link>
        )}
        <Link
          href={`/posts/${postId + 1}`}
          className="text-blue-500 hover:underline"
        >
          Next Post →
        </Link>
      </div>
    </div>
  );
}
