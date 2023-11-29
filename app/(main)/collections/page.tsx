import { auth } from "@clerk/nextjs";
import Filter from "../components/Filter";
import SearchInput from "../components/search-input";
import NoResult from "./no-resuslt";
import { getUser } from "@/app/action/user";
import Question from "@/database/models/question.model";

import QuestionCards from "../components/question-cards";

export const revalidate = 0;

const filterByData = [
  {
    label: "Most Recent",
    value: "most-recent",
  },
  {
    label: "Oldest",
    value: "oldest",
  },
];

const CollectionPage = async () => {
  const { userId } = auth();
  const user = await getUser(userId!);
  const ids = user.saved;
  const questions = await Question.find({ _id: { $in: ids } })
    .sort({ createdAt: -1 })
    .populate("tags")
    .populate("author");
  const noQuestions = questions.length === 0;
  return (
    <div>
      <div>
        <h4 className="font-bold text-2xl">Saved Questions</h4>
      </div>
      <div className="my-5 flex gap-3 sm:items-center flex-col sm:flex-row ">
        <div className="flex-1">
          <SearchInput placeholder="search ..." />
        </div>
        <div className=" sm:w-[150px]  ">
          <Filter data={filterByData} />
        </div>
      </div>
      <div>
        {noQuestions && <NoResult />}

        {!noQuestions && <QuestionCards data={questions} />}
        {/* not found */}
        {/* content */}
      </div>
    </div>
  );
};

export default CollectionPage;
