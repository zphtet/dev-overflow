import { SearchIcon } from "lucide-react";

const PageSearch = () => {
  return (
    <div className=" bg-light-800 py-1 dark:bg-dark-300 rounded-lg px-4 border-red-500 flex items-center gap-3 ">
      <SearchIcon className="text-light-400" />
      <input
        className="flex-1 outline-none border-none py-1 px-2 bg-transparent"
        placeholder="search  ..."
      />
    </div>
  );
};

export default PageSearch;
