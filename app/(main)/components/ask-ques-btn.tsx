"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const AskQuestionBtn = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/ask-question")}
      variant={"default"}
      className="main-gradient-bg "
    >
      Ask a Question
    </Button>
  );
};

export default AskQuestionBtn;
