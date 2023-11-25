import { Schema } from "mongoose";

export type createQuestionParams = {
  title: string;
  content: string;
  tags: string[];
  // author: Schema.Types.ObjectId;
  author: string;
};
