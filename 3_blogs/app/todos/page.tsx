async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    
    return data;
}

type pageParams = {
    params: {
        id: string;
    };
};

export default async function Todos({ params }: pageParams) {
    const todos = await getPosts();

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
                <ul className="space-y-4">
                    {todos.map((todo: any) => (
                        <li
                            key={todo.id}
                            className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
                        >
                            <div>
                                <p className="text-lg font-medium text-gray-800">{todo.title}</p>
                                <p
                                    className={`text-sm ${
                                        todo.completed ? "text-green-600" : "text-red-600"
                                    }`}
                                >
                                    {todo.completed ? "Completed" : "Not Completed"}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}