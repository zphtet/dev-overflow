import { Schema, models, model } from "mongoose";

export interface IAnswer {
  questionId: Schema.Types.ObjectId;
  authorId: Schema.Types.ObjectId;
  content: string;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  createdAt: Date;
}

const AnswerSchema = new Schema<IAnswer>({
  questionId: { type: Schema.Types.ObjectId, required: true },
  authorId: { type: Schema.Types.ObjectId, required: true },
  content: { type: String, required: true },
  upvotes: [{ type: Schema.Types.ObjectId }],
  downvotes: [{ type: Schema.Types.ObjectId }],
  createdAt: { type: Date, default: Date.now },
});

const Answer = models.Answer || model<IAnswer>("Answer", AnswerSchema);

export default Answer;
