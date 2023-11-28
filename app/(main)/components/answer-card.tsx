import Image from "next/image";
import VoteArrs from "./votes";
import ParseHtml from "./parse-html";
import formatRelative from "date-fns/formatRelative";
const AnswerCard = ({
  data,
  authorName,
  imgUrl,
  questionId,
  userId,
}: {
  data: any;
  authorName: string;
  imgUrl: string;
  questionId: string;
  userId: string;
}) => {
  console.log(data, "answer-card");
  const hasUpvoted = data.upvotes.find((id: any) => id.toString() === userId);
  const hasDownvoted = data.downvotes.find(
    (id: any) => id.toString() === userId
  );
  return (
    <div className="border-b pb-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full overflow-hidden">
            <Image
              src={imgUrl}
              alt="user image"
              width={16}
              height={16}
              // className="invert"
            />
          </div>
          <p className="font-bold">{authorName}</p>
          <p className="text-[12px]">
            answered {formatRelative(data.createdAt, Date.now())}
          </p>
        </div>
        <VoteArrs
          upvotes={data.upvotes.length}
          downvotes={data.downvotes.length}
          type="answer"
          hasUpvoted={hasUpvoted ? true : false}
          hasDownvoted={hasDownvoted ? true : false}
          questionId={questionId}
          userId={userId}
        />
      </div>
      <ParseHtml content={data.content} />
    </div>
  );
};

export default AnswerCard;
