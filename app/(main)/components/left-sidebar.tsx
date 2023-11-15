import { NavLinks as NavLinksData } from "@/app/constants";
import NavLink from "./NavLink";
const LeftSideBar = ({ isMobileNav }: { isMobileNav?: boolean }) => {
  return (
    <div
      className={`w-full space-y-6   sm:block  ${
        isMobileNav ? "block py-5 px-2" : "hidden py-10 px-5 "
      }`}
    >
      {NavLinksData.map(({ href, ...others }) => {
        return (
          <NavLink
            key={href}
            href={href}
            {...others}
            isMobileNav={isMobileNav}
          />
        );
      })}
    </div>
  );
};

export default LeftSideBar;
