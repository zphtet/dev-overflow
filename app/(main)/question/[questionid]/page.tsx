import { getQuestionById } from "@/app/action/question";
import Image from "next/image";
import VoteArrs from "../../components/votes";
import Metrics from "../../components/metrics";
import { TagType } from "@/app/action/shared.types";
import Tag from "../../components/Tag";
import Filter from "../../components/Filter";
import { Button } from "@/components/ui/button";
import AnswerForm from "./answer-form";
import ParseHtml from "../../components/parse-html";
const QuestionDetail = async ({
  params,
}: {
  params: { questionid: string };
}) => {
  const question = await getQuestionById(params.questionid);
  console.log(question);
  return (
    <div>
      <div className="  flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full overflow-hidden">
            <Image
              src={question.author.picture}
              alt={`${question.author.name} profile pic`}
              width={25}
              height={25}
            />
          </div>
          <p className="font-bold">{question.author.username}</p>
        </div>

        <div className=" flex items-center gap-3">
          <VoteArrs />
          <button>
            <Image
              src={"/assets/icons/star-red.svg"}
              alt="star image"
              width={22}
              height={22}
            />
          </button>
        </div>
      </div>
      <div className="py-5">
        <h5 className="text-xl font-bold">{question.title}</h5>
      </div>
      <Metrics
        date={question.createdAt}
        answers={question.answers.length}
        views={question.views}
      />
      <div className="py-5">
        <ParseHtml content={question.content} />
      </div>
      <div className="py-5 flex items-center gap-3">
        {question.tags.map((tag: TagType) => {
          return (
            <Tag key={tag.name} text={tag.name} size="sm" textsize="small" />
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-primary-color">
          {question.answers?.length} Answers
        </p>
        <div className="w-[150px]">
          <Filter />
        </div>
      </div>
      <div className="py-5">Answers Will Be Herer</div>
      <div className="flex sm:items-center gap-4 flex-col sm:flex-row justify-between">
        <p className="font-bold">Write your answer</p>
        <Button
          variant={"outline"}
          className="text-primary-color space-x-2 hover:text-primary-color"
        >
          <Image
            src={"/assets/icons/stars.svg"}
            alt="stars image"
            width={15}
            height={15}
          />
          <p>Generate AI Answer</p>
        </Button>
      </div>
      <div className="py-5">
        <AnswerForm />
      </div>
    </div>
  );
};

export default QuestionDetail;
