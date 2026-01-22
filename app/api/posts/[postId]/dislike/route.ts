import connectDB from "@/lib/db";
import { Post } from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  context: { params: Promise<{ postId: string }> }
) => {
  try {
    const { postId } = await context.params;
    await connectDB();

    const { userId } = await req.json(); // ✅ destructure

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
      $pull: { likes: userId }, // ✅ string only
    });

    return NextResponse.json(
      { message: "Post disliked successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DISLIKE ERROR:", error);
    return NextResponse.json(
      { message: "Error disliking post" },
      { status: 500 }
    );
  }
};
