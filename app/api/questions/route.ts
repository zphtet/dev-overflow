import connectDB from "@/database/connectDB";
import Question from "@/database/models/question.model";
import Tag from "@/database/models/tag.model";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  await connectDB();
  const tags = await Tag.find({ id: null });
  const questions = await Question.find({})
    .sort({ createdAt: -1 })
    .populate("tags")
    .populate("author");

  return NextResponse.json({
    data: questions,
  });
}
