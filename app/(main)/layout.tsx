import Navbar from "./components/nav-bar";
import LeftSideBar from "./components/left-sidebar";
import RightSideBar from "./components/right-sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={` h-screen border border-red-600 dark:bg-dark-200 flex flex-col
    `}
    >
      <Navbar />
      <div className="flex   h-[88vh] ">
        <div className="w-max dark:bg-dark-200 bg-light-850 overflow-y-auto left-sidebar-container shadow dark:border-r-2 dark:border-gray-500">
          <LeftSideBar />
        </div>
        <div className="h-full flex-1 p-5">{children}</div>
        <div className="w-max">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
