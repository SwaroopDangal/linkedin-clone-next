import { useRef, useState } from "react";
import ProfilePhoto from "./shared/ProfilePhoto";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Textarea } from "./ui/textarea";
import { Images } from "lucide-react";
import { readFileAsDataUrl } from "@/lib/utils";
import Image from "next/image";
import { createPostAction } from "@/lib/serveractions";

export default function PostDialog({
  setOpen,
  open,
  src,
}: {
  setOpen: any;
  open: boolean;
  src: string;
}) {
  const [inputText, setInputText] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await readFileAsDataUrl(file);
      setSelectedFile(dataUrl);
    }
  };

  const changeHandler = (e: any) => {
    setInputText(e.target.value);
  };

  const postActionHandler = async (formData: FormData) => {
    const inputText = formData.get("inputText") as string;
    try {
      await createPostAction(inputText, selectedFile);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="sm:max-w-md"
        onInteractOutside={() => setOpen(false)}
      >
        <DialogHeader>
          <DialogTitle className="flex gap-2">
            <ProfilePhoto src={src} />
            <div>
              <h1>Swaroop Dangal</h1>
              <p className="text-xs">Post to anyone</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <form action={postActionHandler}>
          <div className="flex flex-col">
            <Textarea
              id="name"
              name="inputText"
              value={inputText}
              onChange={changeHandler}
              className="border-none text-lg focus-visible:ring-0"
              placeholder="Type your message here."
            />
            <div className="my-4">
              {selectedFile && (
                <Image
                  src={selectedFile}
                  alt="preview-image"
                  width={400}
                  height={400}
                />
              )}
            </div>
          </div>
          <DialogFooter>
            <div className="flex items-center gap-4">
              <input
                ref={inputRef}
                type="file"
                name="image"
                className="hidden"
                accept="image/*"
                onChange={fileChangeHandler}
              />
              <Button type="submit">Post</Button>
            </div>
          </DialogFooter>
        </form>
        <Button
          className="gap-2"
          onClick={() => inputRef?.current?.click()}
          variant={"ghost"}
        >
          <Images className="text-blue-500" />
          <p>Media</p>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
