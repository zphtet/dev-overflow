"use client";
import { NavLinkType } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = NavLinkType & {
  isMobileNav?: boolean;
};

const NavLink = ({ href, icon, label, isMobileNav }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <div
      className={` px-4 py-4 rounded-md cursor-pointer nav-link  text-base ${
        active && "active-nav-link"
      } `}
    >
      <Link href={href} className=" flex items-center gap-3 ">
        <Image
          alt={`icon for ${label}`}
          src={icon}
          width={25}
          height={25}
          className={`${
            !active && "invert"
          } lg:w-[25px] lg:h-[25px] w-[20px] h-[20px] dark:invert-0`}
        />
        <p className={`lg:block ${isMobileNav ? "block" : "hidden"}`}>
          {label}
        </p>
      </Link>
    </div>
  );
};

export default NavLink;
