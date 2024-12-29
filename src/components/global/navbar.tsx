"use client";
import Image from "next/image";
import logo from "@/assets/images/logos/logo-mini-80x80.png";
export default function Navbar() {
  return (
    <div>
      <Image src={logo} width={80} height={80} alt="flyra logo" />
    </div>
  );
}
