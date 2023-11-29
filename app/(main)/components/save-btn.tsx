"use client";
import { saveQuestion, removeQuestion } from "@/app/action/user";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const SaveBtn = ({
  questionId,
  userId,
  hasSaved,
}: {
  questionId: string;
  userId: string;
  hasSaved: boolean;
}) => {
  // const [save ]
  const [saved, setSaved] = useState(hasSaved);
  const router = useRouter();
  const saveHandler = async () => {
    try {
      if (saved) {
        setSaved(false);
        await removeQuestion({
          questionId: questionId,
          userId: userId,
        });
        toast.success("unsaved");
        return;
      }
      setSaved(true);
      await saveQuestion({
        questionId: questionId,
        userId: userId,
      });
      toast.success("saved ");
    } catch (e) {
      console.log(e);
      toast.error("error saving");
    } finally {
      router.refresh();
    }
  };

  return (
    <button onClick={saveHandler}>
      <Image
        src={
          saved ? "/assets/icons/star-filled.svg" : "/assets/icons/star-red.svg"
        }
        alt="star image"
        width={22}
        height={22}
      />
    </button>
  );
};

export default SaveBtn;
