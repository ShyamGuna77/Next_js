
import Link from "next/link";

async function getUser(id: string) {
  // Fix the URL - you need a slash between 'users' and the id
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();

  return data;
}

type PageParams = {
  params: {
    id: string
  }
}

const Page = async ({ params }: PageParams) => {
  const user = await getUser(params.id);
  
  return (
    <div className="text-black text-2xl p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        User Details
      </h1>
      <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="font-semibold text-2xl">{user.name}</p>
        <p className="text-gray-600">@{user.username}</p>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.address.city}</p>
        <p className="text-gray-600">{user.company.name}</p>
        <div className="mt-4">
          <Link href="/users" className="text-blue-600 hover:underline">
            ← Back to users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;