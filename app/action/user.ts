"use server";
import User from "@/database/models/user.model";
import connectDB from "@/database/connectDB";
export const getUser = async (clerkId: string) => {
  await connectDB();
  const user = await User.findOne({ clerkId: clerkId });
  return user;
};

export const saveQuestion = async ({
  userId,
  questionId,
}: {
  userId: string;
  questionId: string;
}) => {
  await connectDB();
  const savedQuesUser = await User.findByIdAndUpdate(
    userId,
    { $push: { saved: questionId } },
    { new: true }
  );
  return savedQuesUser;
};

export const removeQuestion = async ({
  userId,
  questionId,
}: {
  userId: string;
  questionId: string;
}) => {
  await connectDB();
  const removeQuesUser = await User.findByIdAndUpdate(
    userId,
    { $pull: { saved: questionId } },
    { new: true }
  );
  return removeQuesUser;
};
