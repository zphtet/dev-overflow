"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Filter({
  data,
}: {
  data: { label: string; value: string }[];
}) {
  return (
    <Select>
      <SelectTrigger className="w-full py-[22px] ring-0 focus:ring-1 focus:outline-0  ">
        <SelectValue placeholder="Select a filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map(({ label, value }) => {
            return <SelectItem value={value}>{label}</SelectItem>;
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
