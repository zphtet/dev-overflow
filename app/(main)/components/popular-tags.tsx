import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PopularTags = () => {
  return (
    <div>
      <h5 className="text-xl font-bold">Popular Tags</h5>
      <div className="py-5 space-y-2">
        {[1, 2, 3, 4, 5].map((num) => {
          return (
            <div
              key={num}
              className="top-tage-item  py-1 flex items-center justify-between"
            >
              <Button
                variant={"secondary"}
                className="uppercase text-light-500"
              >
                Nextjs
              </Button>
              <Badge variant={"secondary"}>12</Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularTags;
