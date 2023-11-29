import Filter from "../components/Filter";
import SearchInput from "../components/search-input";
import Users from "../components/users";

export const revalidate = 0;

const filterByData = [
  {
    label: "Old Users",
    value: "old-users",
  },
  {
    label: "New Users",
    value: "new-users",
  },
  {
    label: "Top Contributors",
    value: "top-contributors",
  },
];
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
          <Filter data={filterByData} />
        </div>
      </div>
      <div>
        {/* all users */}
        <Users />
      </div>
    </div>
  );
};

export default CommunityPage;
