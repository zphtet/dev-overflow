"use client";
import {
  answerDownvote,
  answerUpvote,
  removeAnswerDownvote,
  removeAnswerUpvote,
} from "@/app/action/answer";
import {
  questionDownvote,
  questionUpvote,
  removeQuestionDownvote,
  removeQuestionUpvote,
} from "@/app/action/question";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type VoteProps = {
  upvotes: number;
  downvotes: number;
  type: "question" | "answer";
  hasUpvoted: boolean;
  hasDownvoted: boolean;
  questionId: string;
  userId: string;
};

const VoteArrs: React.FC<VoteProps> = ({
  upvotes,
  downvotes,
  type,
  hasDownvoted,
  hasUpvoted,
  questionId,
  userId,
}) => {
  const [upvote, setUpvote] = useState(hasUpvoted);
  const [downvote, setDownvote] = useState(hasDownvoted);
  const [upvoteCount, setUpvoteCount] = useState(upvotes);
  const [downvoteCount, setDownvoteCount] = useState(downvotes);
  const router = useRouter();


  const upvoteHandler = async () => {
    if (type === "question") {
      if (upvote) {
        setUpvote(false);
        setUpvoteCount((prev) => prev - 1);
        await removeQuestionUpvote({
          questionId: questionId,
          userId: userId,
          path: `/question/${questionId}`,
        });
        toast.success("upvote removed");
        return;
      }
      if (downvote) {
        setDownvoteCount((prev) => prev - 1);
      }
      setUpvote(true);
      setDownvote(false);
      setUpvoteCount((prev) => prev + 1);
      await questionUpvote({
        questionId: questionId,
        userId: userId,
        path: `/question/${questionId}`,
      });
      toast.success("upvoted");
    }

    if (type === "answer") {
      if (upvote) {
        setUpvote(false);
        setUpvoteCount((prev) => prev - 1);
        await removeAnswerUpvote({
          questionId: questionId,
          userId: userId,
          path: `/question/${questionId}`,
        });
        toast.success("upvote removed");
        return;
      }
      if (downvote) {
        setDownvoteCount((prev) => prev - 1);
      }
      setUpvote(true);
      setDownvote(false);
      setUpvoteCount((prev) => prev + 1);
      await answerUpvote({
        questionId: questionId,
        userId: userId,
        path: `/question/${questionId}`,
      });
      toast.success("upvoted");
    }
  };
  const downvoteHandler = async () => {
    if (type === "question") {
      if (downvote) {
        setDownvote(false);
        setDownvoteCount((prev) => prev - 1);
        await removeQuestionDownvote({
          questionId: questionId,
          userId: userId,
          path: `/question/${questionId}`,
        });
        toast.success("downvote removed");
        return;
      }
      if (upvote) {
        setUpvoteCount((prev) => prev - 1);
      }
      setUpvote(false);
      setDownvote(true);
      setDownvoteCount((prev) => prev + 1);
      await questionDownvote({
        questionId: questionId,
        userId: userId,
        path: `/question/${questionId}`,
      });
      toast.success("downvoted");
    }
    if (type === "answer") {
      if (downvote) {
        setDownvote(false);
        setDownvoteCount((prev) => prev - 1);
        await removeAnswerDownvote({
          questionId: questionId,
          userId: userId,
          path: `/question/${questionId}`,
        });
        toast.success("downvote removed");
        return;
      }
      if (upvote) {
        setUpvoteCount((prev) => prev - 1);
      }
      setUpvote(false);
      setDownvote(true);
      setDownvoteCount((prev) => prev + 1);
      await answerDownvote({
        questionId: questionId,
        userId: userId,
        path: `/question/${questionId}`,
      });
      toast.success("downvoted");
    }
  };

  return (
    <div className="flex items-center gap-3 ">
      <div className="flex items-center gap-1">
        <Image
          src={
            upvote ? "/assets/icons/upvoted.svg" : "/assets/icons/upvote.svg"
          }
          alt="upvote image"
          width={20}
          height={30}
          className="cursor-pointer"
          onClick={upvoteHandler}
        />
        <p className=" text-[12px] px-1.5 py-1 bg-light-400/70 rounded text-white">
          {upvoteCount}
        </p>
      </div>

      <div className="flex items-center gap-1">
        <Image
          src={
            downvote
              ? "/assets/icons/downvoted.svg"
              : "/assets/icons/downvote.svg"
          }
          alt="downvote image"
          width={20}
          height={30}
          className="cursor-pointer"
          onClick={downvoteHandler}
        />
        <p className="text-[12px] px-1.5 py-1 bg-light-400/70 rounded text-white">
          {downvoteCount}
        </p>
      </div>
    </div>
  );
};

export default VoteArrs;
