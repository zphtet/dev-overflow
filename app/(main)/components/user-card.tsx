import Image from "next/image";
import TagCom from "./Tag";
const UserCard = async ({ data }: { data: any }) => {
  return (
    <div className="bg-white p-5 flex items-center gap-3 flex-col max-w-[300px]">
      <div className="rounded-full overflow-hidden">
        <Image src={data.picture} alt="auhtor image" width={50} height={50} />
      </div>
      <p className="font-bold text-xl">{data.username}</p>
      {/* <div className="flex gap-1 items-center">
        <TagCom text="nextjs" size="sm" textsize="small" />
        <TagCom text="nextjs" size="sm" textsize="small" />
        <TagCom text="nextjs" size="sm" textsize="small" />
      </div> */}
    </div>
  );
};

export default UserCard;
