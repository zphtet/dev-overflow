import { MoveRight } from "lucide-react";
import Link from "next/link";

const TopQuestions = () => {
  return (
    <div>
      <h5 className="text-xl font-bold">Top Questions</h5>
      <div className="top-q-container py-5 space-y-4">
        {[1, 2, 3, 4, 5].map((num) => {
          return (
            <Link
              href={"/"}
              key={num}
              className="flex gap-2 py-1 items-center sidebar-q-link"
            >
              <p>Is it only me or the font is bolder than necessary?</p>
              <MoveRight className="right-arrow" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopQuestions;
