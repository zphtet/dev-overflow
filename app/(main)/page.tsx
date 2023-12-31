import AskQuestionBtn from "./components/ask-ques-btn";
import SearchInput from "./components/search-input";
import Tag from "./components/Tag";
import Filter from "./components/Filter";
import QuestionCards from "./components/question-cards";
import { getQuestions } from "@/app/action/question";
import { getUser } from "@/app/action/user";
// import { IQuestion } from "@/database/models/question.model";

const filterByData = [
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Recommended",
    value: "recommended",
  },
  {
    label: "Frequent",
    value: "requent",
  },
  {
    label: "Unanswered",
    value: "unanswered",
  },
];

export default async function Home() {
  await getUser("fackid");
  const questions = await getQuestions({ revalide: 0 });

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-2xl">All Questions</h4>
        <AskQuestionBtn />
      </div>
      <div className="sm:py-5 py-3">
        <SearchInput placeholder="search ... " />
      </div>
      <div className="tags-container space-x-4 hidden sm:block">
        <Tag text="Newest" />
        <Tag text="Recommended" />
        <Tag text="Frequent" />
        <Tag text="Unanswered" />
      </div>
      <div className="sm:hidden block">
        <Filter data={filterByData} />
      </div>
      <div className="py-5">
        <QuestionCards data={questions} />
      </div>
    </div>
  );
}
