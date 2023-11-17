import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Filter() {
  return (
    <Select>
      <SelectTrigger className="w-full py-[22px] ring-0 focus:ring-1 focus:outline-0  ">
        <SelectValue placeholder="Select a filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Newest</SelectItem>
          <SelectItem value="banana">Recommended</SelectItem>
          <SelectItem value="blueberry">Unanswered</SelectItem>
          <SelectItem value="grapes">Frequent</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
