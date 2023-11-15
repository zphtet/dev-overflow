import Link from "next/link";
import Image from "next/image";
import { space } from "@/app/fonts/fonts";
const Logo = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <Link href={"/"} className="flex items-center gap-3">
      <Image
        src="/assets/images/site-logo.svg"
        alt="devoverflow logo"
        width={32}
        height={32}
        className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px]"
      />
      <p
        className={`${space.className} text-2xl font-bold  sm:block ${
          isMobile ? "block" : "hidden"
        }`}
      >
        Dev <span className="text-primary-color">Overflow</span>
      </p>
    </Link>
  );
};

export default Logo;
