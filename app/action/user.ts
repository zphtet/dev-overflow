import User from "@/database/models/user.model";
import connectDB from "@/database/connectDB";
export const getUser = async (clerkId: string) => {
  await connectDB();
  const user = await User.findOne({ clerkId: clerkId });
  return user;
};
