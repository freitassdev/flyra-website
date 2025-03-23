import Image from "next/image";
import { NavMenu } from "./nav-menu";
import logo from "@/assets/logos/logo-full-373x131.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-7xl w-11/12 py-4 px-6 mt-4 mx-auto left-0 right-0 rounded-2xl border-[1px] shadow-inner shadow-zinc-400/5 flex flex-row fixed justify-between items-center bg-zinc-900/50 backdrop-blur-lg z-50">
      <Link href={"/"}>
        <Image
          src={logo}
          className="hover:scale-105 transition-all "
          width={116}
          alt="Flyra logo"
        />
      </Link>
      <NavMenu />
    </nav>
  );
}
