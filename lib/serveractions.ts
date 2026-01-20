"use server";

import { Post } from "@/models/post.model";
import { IUser } from "@/models/user.model";
import { currentUser } from "@clerk/nextjs/server";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./db";

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
  } catch (error) {
    throw new Error("Error creating post");
  }
};
