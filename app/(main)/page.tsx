import { Button } from "@/components/ui/button";
import SearchInput from "./components/search-input";
import Tag from "./components/Tag";
export default function Home() {
  return (
    <div className="h-[200vh]">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-2xl">All Questions</h4>
        <Button variant={"default"} className="main-gradient-bg ">
          Ask a Question
        </Button>
      </div>
      <div className="py-5">
        <SearchInput placeholder="search ... " />
      </div>
      <div className="tags-container space-x-4">
        <Tag text="NextJS" />
        <Tag text="CSS" />
        <Tag text="React" />
        <Tag text="Typescript" />
      </div>
    </div>
  );
}
