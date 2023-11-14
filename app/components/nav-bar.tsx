import Link from "next/link";
import { space } from "../fonts/fonts";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="py-5 border flex items-center justify-between">
      <Link href={"/"} className="flex items-center gap-3">
        <Image
          src="/assets/images/site-logo.svg"
          alt="devoverflow logo"
          width={32}
          height={32}
        />
        <p className={`${space.className} text-2xl font-bold`}>
          Dev <span className="text-primary">Overflow</span>
        </p>
      </Link>
      <div>
        <input type="text" />
      </div>
      <div>
        <p>Account</p>
      </div>
    </div>
  );
};

export default Navbar;
