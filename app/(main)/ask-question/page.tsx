import AskQuestionFrom from "./form";
import connectDB from "@/database/connectDB";
const AskQuestion = async () => {
  await connectDB();
  return (
    <div>
      <div>
        <h4 className="font-bold text-2xl">Ask Question</h4>
      </div>
      <div className="my-5">
        <AskQuestionFrom />
      </div>
    </div>
  );
};

export default AskQuestion;
