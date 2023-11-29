import Image from "next/image";
import ExploreBtn from "./explore-btn";
const NoResult = () => {
  return (
    <div className="flex flex-col items-center gap-5 pb-10">
      <div>
        <Image
          src={"/assets/images/light-illustration.png"}
          alt="light illustration image"
          width={300}
          height={400}
        />
      </div>
      <p className="text-xl font-bold">No Saved Questions Found</p>
      <p className="max-w-[600px]">
        It appears that there are no saved questions in your collection at the
        moment 😔.Start exploring and saving questions that pique your interest
        🌟
      </p>
      <ExploreBtn />
    </div>
  );
};

export default NoResult;
