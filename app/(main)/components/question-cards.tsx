import Card from "./card";

const QuestionCards = ({ data }: { data: any }) => {
  return (
    <div className="space-y-5">
      {data?.map((question: any) => {
        return <Card key={question._id} data={question} />;
      })}
    </div>
  );
};

export default QuestionCards;
