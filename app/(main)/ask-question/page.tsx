import { getUser } from "@/app/action/user";
import AskQuestionForm from "./form";

const AskQuestion = async () => {
  // await connectDB();
  const user = await getUser("clerk123");
  console.log(user, "clerk user");
  const id = user._id.toString();
  console.log(id, "userid ");
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
