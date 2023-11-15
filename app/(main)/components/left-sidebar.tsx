import { NavLinks as NavLinksData } from "@/app/constants";
import NavLink from "./NavLink";
const LeftSideBar = () => {
  return (
    <div className="w-full space-y-6 px-5 py-10 hidden sm:block">
      {NavLinksData.map(({ href, ...others }) => {
        return <NavLink key={href} href={href} {...others} />;
      })}
    </div>
  );
};

export default LeftSideBar;
