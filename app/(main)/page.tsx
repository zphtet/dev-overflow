import { Button } from "@/components/ui/button";
import SearchInput from "./components/search-input";
import Tag from "./components/Tag";
import Filter from "./components/Filter";
import QuestionCards from "./components/question-cards";
export default function Home() {
  return (
    <div className="h-[200vh]">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-2xl">All Questions</h4>
        <Button variant={"default"} className="main-gradient-bg ">
          Ask a Question
        </Button>
      </div>
      <div className="sm:py-5 py-3">
        <SearchInput placeholder="search ... " />
      </div>
      <div className="tags-container space-x-4 hidden sm:block">
        <Tag text="Newest" />
        <Tag text="Recommended" />
        <Tag text="Frequent" />
        <Tag text="Unanswered" />
      </div>
      <div className="sm:hidden block">
        <Filter />
      </div>
      <div className="py-5">
        <QuestionCards />
      </div>
    </div>
  );
}
