import Link from "next/link";
import { space } from "../fonts/fonts";
import Image from "next/image";
import { UserButton, auth } from "@clerk/nextjs";
import ThemeSwitcher from "./theme-switcher";
import SearchInput from "./search-input";
const Navbar = () => {
  return (
    <div className="py-5 border flex items-center justify-between sm:px-5">
      <Link href={"/"} className="flex items-center gap-3">
        <Image
          src="/assets/images/site-logo.svg"
          alt="devoverflow logo"
          width={32}
          height={32}
        />
        <p className={`${space.className} text-2xl font-bold`}>
          Dev <span className="text-primary-color">Overflow</span>
        </p>
      </Link>
      <div>
        <SearchInput />
      </div>
      <div className="flex gap-5 items-center">
        <ThemeSwitcher />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
