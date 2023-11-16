"use client";

import { SearchIcon } from "lucide-react";
const SearchInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className=" bg-light-800 py-2 dark:bg-dark-300 rounded-lg px-4 border-red-500 flex items-center gap-3 ">
      <SearchIcon className="text-light-400" />
      <input
        className="flex-1 outline-none border-none py-1 px-2 bg-transparent"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
