import { comments } from "./data";
export async function GET() {
    return Response.json(comments)
} 
export async function POST(request:Request) {
    const comment = await request.json();
    const newComment = {id: comments.length + 1, ...comment};
    comments.push(newComment);
    return new Response(JSON.stringify(comment),{
        headers:{
            "Content-type":"application/json"
        },
        status:201
    })
}