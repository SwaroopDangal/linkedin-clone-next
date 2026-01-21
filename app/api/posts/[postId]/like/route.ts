import connectDB from "@/lib/db";
import { Post } from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    await connectDB();
    const post = await Post.findById(params.postId);
    if (!post) return NextResponse.json({ message: "Post not found" });

    return NextResponse.json(post.likes);
  } catch (error) {
    return NextResponse.json({ message: "Error retrieving post" });
  }
};

export const POST = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    await connectDB();
    const userId = await req.json();
    const post = await Post.findById(params.postId);
    if (!post) return NextResponse.json({ message: "Post not found" });
    await post.updateOne({ $addToSet: { likes: userId } });
    return NextResponse.json({ message: "Post liked successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Error liking post" });
  }
};
