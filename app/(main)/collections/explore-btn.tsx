"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const ExploreBtn = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/")}
      variant={"default"}
      className="main-gradient-bg "
    >
      Explore Question
    </Button>
  );
};

export default ExploreBtn;
