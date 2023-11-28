import { getAnswesByQuesId } from "@/app/action/answer";
import Filter from "./Filter";
import AnswerCard from "./answer-card";

const filterByData = [
  {
    label: "Hightest Upvotes",
    value: "hightest-upvotes",
  },
  {
    label: "Lowest Upvotes",
    value: "lowest-upvotes",
  },
  {
    label: "Recent",
    value: "recent",
  },
  {
    label: "Oldest",
    value: "oldest",
  },
];
const Answers = async ({
  questionId,
  authorName,
  userId,
  imgUrl,
}: {
  questionId: string;
  authorName: string;
  imgUrl: string;
  userId: string;
}) => {
  const answers = await getAnswesByQuesId(questionId);
  console.log(answers, "answers from");
  if (answers.length === 0) return null;
  return (
    <div>
      <div className="flex items-center justify-between my-5">
        <p className="font-bold text-primary-color">0 Answers</p>
        <div className="w-[150px]">
          <Filter data={filterByData} />
        </div>
      </div>
      <div className="space-y-5">
        {answers.map((answer) => {
          return (
            <AnswerCard
              key={answer._id}
              data={answer}
              authorName={authorName}
              imgUrl={imgUrl}
              questionId={questionId}
              userId={userId}
            />
          );
        })}

        {/* <AnswerCard />
        <AnswerCard />
        <AnswerCard /> */}
      </div>
    </div>
  );
};

export default Answers;
