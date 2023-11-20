import Image from "next/image";
import Tag from "./Tag";

const Card = () => {
  return (
    <div className="bg-white rounded shadow p-5 space-y-4">
      <p className="font-bold text-xl line-clamp-1">
        Best pratices for building Next.js Application . Please Answer these
        question
      </p>
      <div>
        <Tag text="NextJs" size="sm" textsize="small" />
      </div>
      <div className="flex md:items-center justify-between md:flex-row flex-col gap-3">
        <div className="flex items-center gap-1">
          <Image
            src={"/assets/icons/user.svg"}
            alt="profile pic"
            width={"18"}
            height={"18"}
            className="invert border rounded-full"
          />
          <p className="text-sm">
            Sujata | Js Matery{" "}
            <span className="text-[12px]">. asked 30 days ago</span>
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
            30 likes
          </div>

          <div className="flex items-center text-[12px] gap-1">
            <Image
              src={"/assets/icons/message.svg"}
              alt="message icon"
              width={"14"}
              height={"14"}
            />
            12 messages
          </div>

          <div className="flex items-center text-[12px] gap-1">
            <Image
              src={"/assets/icons/eye.svg"}
              alt="eye icon"
              width={"14"}
              height={"14"}
            />
            2000 views
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
