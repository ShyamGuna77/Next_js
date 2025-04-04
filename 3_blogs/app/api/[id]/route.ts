import data from "../data";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const comment = data.find((comment) => comment.id === parseInt(id)); // Convert id to number

  if (!comment) {
    return Response.json({ message: "Comment not found" }, { status: 404 });
  }

  return Response.json(comment);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {

    const {id} = params;
    const body = await request.json()
    const {title} = body
    const index = data.findIndex((comment) => comment.id === parseInt(id))
    data[index].title = title
    return Response.json(data[index])
}


export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
    const {id} = params;
    const index = data.findIndex((comment) => comment.id === parseInt(id))
    data.splice(index,1)
    return Response.json({message:"message deleted succesfully"} , {status:201})
}