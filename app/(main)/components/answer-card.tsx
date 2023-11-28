import Image from "next/image";
import VoteArrs from "./votes";
import ParseHtml from "./parse-html";
import formatRelative from "date-fns/formatRelative";
const AnswerCard = ({
  data,
  authorName,
  imgUrl,
}: {
  data: any;
  authorName: string;
  imgUrl: string;
}) => {
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
        <VoteArrs />
      </div>
      <ParseHtml content={data.content} />
    </div>
  );
};

export default AnswerCard;
