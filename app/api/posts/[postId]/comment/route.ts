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

    const post = await Post.findById(postId).populate({
      path: "comments",
      options: { sort: { createdAt: -1 } },
    });

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return NextResponse.json(post.comments);
  } catch (error) {
    console.error(error);
    return new NextResponse("Error retrieving comments", { status: 500 });
  }
};
