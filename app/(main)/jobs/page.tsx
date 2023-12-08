import SearchInput from "../components/search-input";
import JobCompoment from "../components/job";
const JobPage = () => {
  return (
    <div>
      <div>
        <h4 className="font-bold text-2xl">Jobs</h4>
      </div>
      <div className="my-5 flex gap-3 sm:items-center flex-col sm:flex-row ">
        <div className="flex-1">
          <SearchInput placeholder="search ..." />
        </div>
        {/* <div className=" sm:w-[150px]  ">
          <Filter data={filterByData} />
        </div> */}
      </div>
      <div className="space-y-3">
        <JobCompoment />
        <JobCompoment />
        <JobCompoment />
      </div>
    </div>
  );
};

export default JobPage;
