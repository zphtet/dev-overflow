"use server";

import Answer from "@/database/models/answer.model";
import Question from "@/database/models/question.model";
import { revalidatePath } from "next/cache";

export const createAnswer = async ({
  questionId,
  authorId,
  content,
  path,
}: {
  questionId: string;
  authorId: string;
  content: string;
  path: string;
}) => {
  const createdAnswer = await Answer.create({
    questionId,
    authorId,
    content,
  });

  await Question.findByIdAndUpdate(questionId, {
    $push: { answers: createdAnswer._id },
  });

  revalidatePath(path);
  revalidatePath(`/question/${questionId}`);
  return createdAnswer;
};

export const getAnswesByQuesId = async (questionId: string) => {
  console.log("questionId", questionId);
  const answers = await Answer.find({ questionId: questionId }).sort({
    createdAt: -1,
  });

  return answers;
};

// votes

export const answerUpvote = async ({
  questionId,
  userId,
  path,
}: {
  questionId: string;
  userId: string;
  path: string;
}) => {
  const updatedAnswer = await Answer.findByIdAndUpdate(
    questionId,
    {
      $push: { upvotes: userId },
      $pull: { downvotes: userId },
    },
    {
      new: true,
    }
  );

  // revalidatePath(path);
  return updatedAnswer;
};

export const removeAnswerUpvote = async ({
  questionId,
  userId,
  path,
}: {
  questionId: string;
  userId: string;
  path: string;
}) => {
  const upvotedAnswer = await Answer.findByIdAndUpdate(
    questionId,
    {
      $pull: { upvotes: userId },
    },
    {
      new: true,
    }
  );

  // revalidatePath(path);
  return upvotedAnswer;
};

export const answerDownvote = async ({
  questionId,
  userId,
  path,
}: {
  questionId: string;
  userId: string;
  path: string;
}) => {
  const upvotedAnswer = await Answer.findByIdAndUpdate(
    questionId,
    {
      $push: { downvotes: userId },
      $pull: { upvotes: userId },
    },
    {
      new: true,
    }
  );

  // revalidatePath(path);
  return upvotedAnswer;
};

export const removeAnswerDownvote = async ({
  questionId,
  userId,
  path,
}: {
  questionId: string;
  userId: string;
  path: string;
}) => {
  const upvotedAnswer = await Answer.findByIdAndUpdate(
    questionId,
    {
      $pull: { downvotes: userId },
    },
    {
      new: true,
    }
  );

  // revalidatePath(path);
  return upvotedAnswer;
};
