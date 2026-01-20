import { IPostDocument } from "@/models/post.model";
import React from "react";
import { Button } from "./ui/button";
import { MessageCircleMore, Repeat, Send, ThumbsUp } from "lucide-react";

const SocialOptions = ({ post }: { post: IPostDocument }) => {
  return (
    <div>
      <div className="text-sm mx-2 p-2 flex items-center justify-between border-b border-gray-300">
        <Button
          variant={"ghost"}
          className="flex items-center gap-1 rounded-lg text-gray-600 hover:text-black"
        >
          <ThumbsUp />
          <p>Like</p>
        </Button>
        <Button
          variant={"ghost"}
          className="flex items-center gap-1 rounded-lg text-gray-600 hover:text-black"
        >
          <MessageCircleMore />
          <p>Message</p>
        </Button>
        <Button
          variant={"ghost"}
          className="flex items-center gap-1 rounded-lg text-gray-600 hover:text-black"
        >
          <Repeat />
          <p>Repost</p>
        </Button>
        <Button
          variant={"ghost"}
          className="flex items-center gap-1 rounded-lg text-gray-600 hover:text-black"
        >
          <Send />
          <p>Send</p>
        </Button>
      </div>
    </div>
  );
};

export default SocialOptions;
