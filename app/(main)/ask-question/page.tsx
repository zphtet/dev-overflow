import { getUser } from "@/app/action/user";
import AskQuestionForm from "./form";
import { auth } from "@clerk/nextjs";

const AskQuestion = async () => {
  // await connectDB();
  const { userId } = auth();
  console.log(userId, "userid");
  const user = await getUser(userId!);
  console.log(user, "getuser");
  const id = user._id.toString();
  return (
    <div>
      <div>
        <h4 className="font-bold text-2xl">Ask Question</h4>
      </div>
      <div className="my-5">
        <AskQuestionForm userId={id} />
      </div>
    </div>
  );
};

export default AskQuestion;
