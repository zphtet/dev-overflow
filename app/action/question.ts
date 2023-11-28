"use server";
import Question from "@/database/models/question.model";
import { createQuestionParams } from "./shared.types";
import connectDB from "@/database/connectDB";
import Tag from "@/database/models/tag.model";
import { revalidatePath } from "next/cache";

export const createQuestion = async ({
  title,
  content,
  tags,
  author,
  path,
}: createQuestionParams) => {
  await connectDB();
  const createdQuestion = await Question.create({
    title,
    content,
    author,
  });
  const questionId = createdQuestion._id;

  const tagArr: string[] = [];

  for (const tag of tags) {
    const createdTag = await Tag.findOneAndUpdate(
      { name: tag },
      { name: tag, $push: { questions: questionId } },
      {
        upsert: true,
        new: true,
      }
    );
    tagArr.push(createdTag._id);
    // console.log(createdTag._id);
  }

  console.log("tags", tagArr);
  const updatedQuestion = await Question.findByIdAndUpdate(
    questionId,
    { tags: [...tagArr] },
    { new: true }
  );

  if (path) {
    revalidatePath(path!);
  }
  console.log("Question created successfully", updatedQuestion);
};

export const getQuestions = async ({ revalide }: { revalide: number }) => {
  await connectDB();
  const questions = await Question.find({})
    .sort({ createdAt: -1 })
    .populate("tags")
    .populate("author");
  return questions;
};

export const getQuestionById = async (id: string) => {
  await connectDB();
  const question = await Question.findById(id)
    .populate("author")
    .populate("tags");
  return question;
};

// votes

export const questionUpvote = async ({
  questionId,
  userId,
  path,
}: {
  questionId: string;
  userId: string;
  path: string;
}) => {
  const upvotedQuestion = await Question.findByIdAndUpdate(
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
  return upvotedQuestion;
};

export const removeQuestionUpvote = async ({
  questionId,
  userId,
  path,
}: {
  questionId: string;
  userId: string;
  path: string;
}) => {
  const upvotedQuestion = await Question.findByIdAndUpdate(
    questionId,
    {
      $pull: { upvotes: userId },
    },
    {
      new: true,
    }
  );

  // revalidatePath(path);
  return upvotedQuestion;
};

export const questionDownvote = async ({
  questionId,
  userId,
  path,
}: {
  questionId: string;
  userId: string;
  path: string;
}) => {
  const upvotedQuestion = await Question.findByIdAndUpdate(
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
  return upvotedQuestion;
};

export const removeQuestionDownvote = async ({
  questionId,
  userId,
  path,
}: {
  questionId: string;
  userId: string;
  path: string;
}) => {
  const upvotedQuestion = await Question.findByIdAndUpdate(
    questionId,
    {
      $pull: { downvotes: userId },
    },
    {
      new: true,
    }
  );

  // revalidatePath(path);
  return upvotedQuestion;
};

export const updateViews = async ({
  questionId,
  count,
}: {
  questionId: string;
  count: number;
}) => {
  const updatedQuestion = await Question.findByIdAndUpdate(
    questionId,
    {
      views: count + 1,
    },
    { new: true }
  );
  revalidatePath(`/question/${questionId}`);
  revalidatePath("/");
  return updatedQuestion;
};
