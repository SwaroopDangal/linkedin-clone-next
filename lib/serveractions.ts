"use server";

import { Post } from "@/models/post.model";
import { IUser } from "@/models/user.model";
import { currentUser } from "@clerk/nextjs/server";

export const createPostAction = async (
  inputText: string,
  selectedFile: string
) => {
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

  try {
    //create post with img
    if (image) {
      await Post.create({
        description: inputText,
        user: userDataBase,
        imageUrl: image,
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
