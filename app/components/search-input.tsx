"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
const SearchInput = () => {
  return (
    <div className=" bg-light-800 py-1 dark:bg-dark-300 rounded-lg px-4 border-red-500 flex items-center gap-3 md:w-[400px]">
      <SearchIcon className="text-light-400" />
      <input
        className="flex-1 outline-none border-none py-1 px-2 bg-transparent"
        placeholder="search globally ..."
      />
    </div>
  );
};

export default SearchInput;
