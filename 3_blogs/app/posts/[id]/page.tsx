async function getPost(id: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.json();
}

type PageParams = {
    params: {
        id: string;
    };
};

const Page = async ({ params }: PageParams) => {
    const post = await getPost(params.id);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-300 to-white p-6">
            <div className="max-w-3xl w-full shadow-lg rounded-lg overflow-hidden">
                <header className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6">
                    <h1 className="text-4xl text-blue-600 font-bold mb-2 text-center">{post.title}</h1>
                    <p className="text-center text-sm text-pink-500">
                        Published on {new Date().toLocaleDateString()}
                    </p>
                </header>
                <article className="p-6 text-gray-800 leading-relaxed">
                    <p className="text-lg">{post.body}</p>
                </article>
                <footer className="bg-gray-100 p-4 flex justify-between items-center border-t">
                    <p className="text-gray-600 text-sm">
                        Written by <span className="font-semibold">Thala</span>
                    </p>
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md transition">
                        Read More
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default Page;
