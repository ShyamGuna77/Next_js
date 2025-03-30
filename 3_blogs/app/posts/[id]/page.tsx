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
        <div className="flex justify-between items-center  h-screen bg-gray-100 p-6">
            <div className="max-w-3xl w-full shadow-lg rounded-lg overflow-hidden bg-white">
                <header className="bg-gray-800 text-white p-6">
                    <h1 className="text-3xl font-bold mb-2 text-center">{post.title}</h1>
                    <p className="text-center text-sm text-gray-300">
                        Published on {new Date().toLocaleDateString()}
                    </p>
                </header>
                <article className="p-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">{post.body}</p>
                </article>
                <footer className="bg-gray-200 p-4 flex justify-between items-center border-t">
                    <p className="text-gray-600 text-sm">
                        Written by <span className="font-semibold">Thala</span>
                    </p>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md transition">
                        Read More
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default Page;
