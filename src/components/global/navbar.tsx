"use client";
import Image from "next/image";
import logo from "@/assets/images/logos/logo-full-373x131.png";
import Link from "next/link";
import { LucideDot } from "lucide-react";
import { Button } from "../ui/button";

interface INavbarItem {
  name: string;
  link: string;
}

const navbarItems: INavbarItem[] = [
  {
    name: "Início",
    link: "#",
  },
  {
    name: "Perguntas Frequentes",
    link: "#",
  },
  {
    name: "Sobre nós",
    link: "#",
  },
];

export default function Navbar() {
  return (
    <nav className={`flex flex-row justify-between items-center py-4 `}>
      <Image src={logo} width={180} className="max-md:w-40" alt="flyra logo" />
      <div className="flex flex-row gap-3 items-center">
        {navbarItems.map((item, index) => (
          <div className="contents" key={index}>
            <Link href={item.link}>
              <span className="hover:text-muted-foreground transition-colors">
                {item.name}
              </span>
            </Link>
            {index !== navbarItems.length - 1 && (
              <LucideDot className="size-6 text-muted-foreground/60" />
            )}
          </div>
        ))}
        <Button className="ml-3 px-8 rounded-full">Fazer Login</Button>
      </div>
    </nav>
  );
}
