import Link from "next/link";

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}

const Page = async () => {
  const users = await getUsers();

  return (
    <div className="text-black text-2xl p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        User List
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user: any) => (
          <li
            key={user.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md text-center hover:bg-gray-200 transition"
          >
            <Link href={`/users/${user.id}`} className="block">
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-600">@{user.username}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
