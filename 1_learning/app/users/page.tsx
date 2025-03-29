// app/users/page.tsx
export default async function UsersPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
  

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <ul className="space-y-4">
                {users.map((user: any) => (
                    <li key={user.id} className="border p-4 rounded shadow">
                        <p className="text-lg font-semibold">{user.name}</p>
                        <p className="text-blue-700">City: {user.address.city}</p>
                        <p className="text-cyan-400">Company: {user.company.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
