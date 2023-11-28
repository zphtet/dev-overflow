import { getQuestionById } from "@/app/action/question";
import Image from "next/image";
import VoteArrs from "../../components/votes";
import Metrics from "../../components/metrics";
import { TagType } from "@/app/action/shared.types";
import Tag from "../../components/Tag";
import Answers from "../../components/answers";
import { Button } from "@/components/ui/button";
import AnswerForm from "./answer-form";
import ParseHtml from "../../components/parse-html";
import { auth } from "@clerk/nextjs";
import { getUser } from "@/app/action/user";

const QuestionDetail = async ({
  params,
}: {
  params: { questionid: string };
}) => {
  const { userId } = auth();
  const question = await getQuestionById(params.questionid);
  const user = await getUser(userId!);
  const hasUpvoted = question.upvotes.find(
    (id: any) => id.toString() === user._id.toString()
  );
  const hasDownvoted = question.downvotes.find(
    (id: any) => id.toString() === user._id.toString()
  );
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
          <VoteArrs
            upvotes={question.upvotes.length}
            downvotes={question.downvotes.length}
            type="question"
            hasUpvoted={hasUpvoted}
            hasDownvoted={hasDownvoted}
            questionId={question._id.toString()}
            userId={user._id.toString()}
          />
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
      {/* Ansrers will be here */}
      <div className="my-5">
        <Answers
          questionId={question._id.toString()}
          authorName={user.name}
          imgUrl={user.picture}
        />
      </div>
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
        <AnswerForm
          questionId={question._id.toString()}
          authorId={user._id.toString()}
        />
      </div>
    </div>
  );
};

export default QuestionDetail;
