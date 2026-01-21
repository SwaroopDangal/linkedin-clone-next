"use server";

import { Post } from "@/models/post.model";
import { IUser } from "@/models/user.model";
import { currentUser } from "@clerk/nextjs/server";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./db";
import { revalidatePath } from "next/cache";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const createPostAction = async (
  inputText: string,
  selectedFile: string
) => {
  await connectDB();
  const user = await currentUser();
  if (!user) throw new Error("User not authenticated");
  if (!inputText) throw new Error("Input text is required");
  const image = selectedFile;

  const userDataBase: IUser = {
    userId: user.id,
    profilePhoto: user?.imageUrl || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
  };
  let uploadResponse;
  try {
    //create post with img
    if (image) {
      uploadResponse = await cloudinary.uploader.upload(image);
      await Post.create({
        description: inputText,
        user: userDataBase,
        imageUrl: uploadResponse?.secure_url,
      });
    } else {
      //create post w/o image
      await Post.create({
        description: inputText,
        user: userDataBase,
      });
    }
    revalidatePath("/");
  } catch (error) {
    throw new Error("Error creating post");
  }
};

export const getAllPosts = async () => {
  await connectDB();
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(posts));
  } catch (error) {
    console.log(error);
  }
};

export const deletePostAction = async (postId: string) => {
  await connectDB();
  const user = await currentUser();
  if (!user) throw new Error("User not authenticated");
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");
  if (post.user.userId !== user.id) throw new Error("Unauthorized");

  try {
    await Post.deleteOne({ _id: postId });
    revalidatePath("/");
  } catch (error) {
    throw new Error("Error deleting post");
  }
};
