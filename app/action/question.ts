"use server";
import Question from "@/database/models/question.model";
import { createQuestionParams } from "./shared.types";
import connectDB from "@/database/connectDB";
import Tag from "@/database/models/tag.model";
import { Schema } from "mongoose";
export const createQuestion = async ({
  title,
  content,
  tags,
  author,
}: createQuestionParams) => {
  await connectDB();
  // console.log(title, content, tags);
  // return;
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

  console.log("Question created successfully", updatedQuestion);
};
