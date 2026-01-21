import { IPostDocument } from "@/models/post.model";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MessageCircleMore, Repeat, Send, ThumbsUp } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const SocialOptions = ({ post }: { post: IPostDocument }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState<string[]>(post?.likes ?? []);
  const [commentOpen, setCommentOpen] = useState(false);
  const { user } = useUser();

  const likeOrDislikeHandler = async () => {
    if (!user) return;

    const tempLiked = liked;
    const tempLikes = likes;

    const dislike = likes.filter((userId) => userId !== user.id);
    const like = likes.includes(user.id) ? likes : [...likes, user.id];

    const newLike = liked ? dislike : like;

    setLiked(!liked);
    setLikes(newLike);

    const res = await fetch(
      `/api/posts/${post._id.toString()}/${liked ? "dislike" : "like"}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id }),
      }
    );

    if (!res.ok) {
      setLikes(tempLikes);
      setLiked(tempLiked);
      return;
    }

    const fetchAllLikes = await fetch(`/api/posts/${post._id.toString()}/like`);

    if (!fetchAllLikes.ok) {
      setLikes(tempLikes);
      return;
    }

    const likeData = await fetchAllLikes.json();
    setLikes(Array.isArray(likeData) ? likeData : []);
  };

  useEffect(() => {
    if (user?.id && post?.likes) {
      setLiked(post.likes.includes(user.id));
    }
  }, [user, post.likes]);
  return (
    <div>
      <div className="text-sm mx-2 p-2 flex items-center justify-between border-b border-gray-300">
        {likes && likes.length > 0 && (
          <p className="text-xm text-gray-500 hover:text-blue-500 hover:underline hover:cursor-pointer">
            {likes.length} likes
          </p>
        )}
      </div>
      <div className="flex items-center m-1 justify-between">
        <Button
          onClick={likeOrDislikeHandler}
          variant={"ghost"}
          className="flex items-center gap-1 rounded-lg text-gray-600 hover:text-black"
        >
          <ThumbsUp className={`${liked && "fill-[#378FE9]"}`} />
          <p className={`${liked && "text-[#378FE9]"}`}>Like</p>
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
