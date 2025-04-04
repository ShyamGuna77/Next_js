import data from "./data";


export async function GET() {
    console.log("from api");
    return new Response(JSON.stringify({ data }));
}

export async function POST(request: Request) {
    const response = await request.json();
    const newData = {
        id: data.length + 1,
        title: response.title,
        author: response.author,
        publishedDate: response.publishedDate,
        tags:response.tags
    };
    data.push(newData); // Corrected to push to 'data' instead of 'response'
    return new Response(JSON.stringify({ newData }), {
        headers: { "Content-Type": "application/json" },
        status: 201,
    });
}