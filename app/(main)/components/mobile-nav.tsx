"use client";
import { Button } from "@/components/ui/button";
import Logo from "./logo";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import LeftSideBar from "./left-sidebar";
export default function MobileNav() {
  const closeHandler = () => {
    document.getElementById("sheetclose")?.click();
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="sm:hidden block">
          <Button variant={"outline"} className=" border-none ">
            <Image
              src={"/assets/icons/hamburger.svg"}
              alt="hamburger menu"
              width={30}
              height={30}
              className="invert dark:invert-0  "
            />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-2">
        <div className="px-2 py-5">
          <Logo isMobile={true} />
        </div>
        {/* <SheetClose onClick={() => alert("clicked")}> */}
        <div className="w-full" onClick={closeHandler}>
          <LeftSideBar isMobileNav={true} />
        </div>
        {/* </SheetClose> */}
      </SheetContent>
    </Sheet>
  );
}
