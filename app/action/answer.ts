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
