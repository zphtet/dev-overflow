import Filter from "../components/Filter";
import SearchInput from "../components/search-input";

const CommunityPage = () => {
  return (
    <div>
      <div>
        <h4 className="font-bold text-2xl">All Users</h4>
      </div>
      <div className="my-5 flex gap-3 sm:items-center flex-col sm:flex-row ">
        <div className="flex-1">
          <SearchInput placeholder="search ..." />
        </div>
        <div className=" sm:w-[150px]  ">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
