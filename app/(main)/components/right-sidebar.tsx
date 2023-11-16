import TopQuestions from "./top-questions";
import PopularTags from "./popular-tags";

const RightSideBar = () => {
  return (
    <div className="w-full p-5 h-full space-y-5 ">
      <TopQuestions />
      <PopularTags />
    </div>
  );
};

export default RightSideBar;
