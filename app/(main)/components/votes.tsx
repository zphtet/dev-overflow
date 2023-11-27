import Image from "next/image";

const VoteArrs = () => {
  return (
    <div className="flex items-center gap-3 ">
      <div className="flex items-center gap-1">
        <Image
          src={"/assets/icons/upvote.svg"}
          alt="upvote image"
          width={"20"}
          height={"30"}
          className="cursor-pointer"
        />
        <p className=" text-[12px] px-1.5 py-1 bg-light-400/70 rounded text-white">
          0
        </p>
      </div>

      <div className="flex items-center gap-1">
        <Image
          src={"/assets/icons/downvote.svg"}
          alt="upvote image"
          width={"20"}
          height={"30"}
          className="cursor-pointer"
        />
        <p className="text-[12px] px-1.5 py-1 bg-light-400/70 rounded text-white">
          0
        </p>
      </div>
    </div>
  );
};

export default VoteArrs;
