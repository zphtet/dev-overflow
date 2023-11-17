import { Button } from "@/components/ui/button";

type TagProps = {
  size?: "sm" | "default" | "lg" | "icon";
  textsize?: "small" | "medium" | "large";
  text: string;
};

const Tag = ({ size, textsize, text }: TagProps) => {
  const fontsize =
    textsize === "small"
      ? "text-sm"
      : textsize === "large"
      ? "text-xl"
      : "text-base";
  return (
    <Button
      variant={"secondary"}
      size={size || "default"}
      className={` text-light-500 ${fontsize} font-light`}
    >
      {text}
    </Button>
  );
};

export default Tag;
