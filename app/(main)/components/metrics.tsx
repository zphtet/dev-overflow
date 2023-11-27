import { formatDistance } from "date-fns";
import Image from "next/image";

const Metrics = ({
  date,
  answers,
  views,
}: {
  date: Date;
  answers: number;
  views: number;
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Image
          src={"/assets/icons/clock.svg"}
          alt="clock image"
          width={12}
          height={12}
        />
        <p className="text-[12px]">
          asked {formatDistance(date, Date.now(), { addSuffix: true })}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Image
          src={"/assets/icons/message.svg"}
          alt="message image"
          width={15}
          height={15}
        />
        <p className="text-[12px]">{answers} Answers</p>
      </div>

      <div className="flex items-center gap-2">
        <Image
          src={"/assets/icons/eye.svg"}
          alt="eye image"
          width={15}
          height={15}
        />
        <p className="text-[12px]">{views} views</p>
      </div>
    </div>
  );
};

export default Metrics;
