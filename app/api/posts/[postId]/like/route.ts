import connectDB from "@/lib/db";
import { Post } from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (
  req: NextRequest,
  context: { params: Promise<{ postId: string }> }
) => {
  try {
    const { postId } = await context.params;
    await connectDB();
    const post = await Post.findById(postId);
    if (!post) return NextResponse.json({ message: "Post not found" });

    return NextResponse.json(post.likes);
  } catch (error) {
    return NextResponse.json({ message: "Error retrieving post" });
  }
};

export const POST = async (
  req: NextRequest,
  context: { params: Promise<{ postId: string }> }
) => {
  try {
    const { postId } = await context.params;
    await connectDB();

    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { message: "User ID required" },
        { status: 400 }
      );
    }

    const post = await Post.findById(postId);
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    await post.updateOne({
      $addToSet: { likes: userId },
    });

    return NextResponse.json(
      { message: "Post liked successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("LIKE ERROR:", error);
    return NextResponse.json({ message: "Error liking post" }, { status: 500 });
  }
};
