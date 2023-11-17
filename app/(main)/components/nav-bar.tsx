import { UserButton } from "@clerk/nextjs";
import ThemeSwitcher from "./theme-switcher";
import SearchInput from "./search-input";
import MobileNav from "./mobile-nav";
import Logo from "./logo";
const Navbar = () => {
  return (
    <div className="py-5 flex items-center justify-between px-5 shadow">
      <Logo />
      <div className="hidden lg:block w-[450px]">
        <SearchInput placeholder="search globally ... " />
      </div>
      <div className="flex gap-5 items-center">
        <ThemeSwitcher />
        <UserButton afterSignOutUrl="/" />
        <div className="block sm:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
