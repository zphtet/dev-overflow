import { IQuestion } from "@/database/models/question.model";
import Card from "./card";
import { Key } from "react";

const QuestionCards = ({ data }: { data: any }) => {
  return (
    <div className="space-y-5">
      {data.map((question: any) => {
        return <Card key={question._id} data={question} />;
      })}
    </div>
  );
};

export default QuestionCards;
