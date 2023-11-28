import Image from "next/image";
import Tag from "./Tag";
import { formatDistance } from "date-fns";
import { Key } from "react";
import Link from "next/link";
const Card = ({ data }: { data: any }) => {
  // console.log(data);
  return (
    <Link href={`/question/${data._id}`} className="block">
      <div className="bg-white rounded shadow p-5 space-y-4 dark:bg-dark-300">
        <p className="font-bold text-xl line-clamp-1">{data.title}</p>
        <div className="flex items-center gap-2">
          {/* {
          data.tags.map((tag))
        } */}
          {data.tags.map(
            (tag: { name: string; _id: Key | null | undefined }) => {
              return (
                <Tag text={tag.name} key={tag._id} size="sm" textsize="small" />
              );
            }
          )}
          {/* <Tag text="NextJs" size="sm" textsize="small" /> */}
        </div>
        <div className="flex md:items-center justify-between md:flex-row flex-col gap-3">
          <div className="flex items-center gap-1">
            <Image
              src={data.author.picture}
              alt={`${data.author.name} profile picture`}
              width={"18"}
              height={"18"}
              className=" border rounded-full"
            />
            <p className="text-sm">
              {data.author?.name}
              <span className="text-[12px]">
                . asked{" "}
                {formatDistance(data.createdAt, Date.now(), {
                  addSuffix: true,
                })}
              </span>
            </p>
          </div>
          <div className="flex gap-2 sm:gap-5 items-center">
            <div className="flex items-center text-[12px] gap-1">
              <Image
                src={"/assets/icons/like.svg"}
                alt="like icon"
                width={"14"}
                height={"14"}
              />
              {data.upvotes.length} likes
            </div>

            <div className="flex items-center text-[12px] gap-1">
              <Image
                src={"/assets/icons/message.svg"}
                alt="message icon"
                width={"14"}
                height={"14"}
              />
              {data.answers.length} messages
            </div>

            <div className="flex items-center text-[12px] gap-1">
              <Image
                src={"/assets/icons/eye.svg"}
                alt="eye icon"
                width={"14"}
                height={"14"}
              />
              {data.views} views
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
