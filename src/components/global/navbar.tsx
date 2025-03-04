"use client";
import Image from "next/image";
import logo from "@/assets/logos/logo-full-373x131.png";
import Link from "next/link";
import { LucideDot } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { useRouter } from "next/navigation";

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
  const [isMobileOpened, setIsMobileOpened] = useState<boolean>(true);

  const router = useRouter();
  const redirectToLoginPage = () => {
    router.push("/auth/login");
  };

  return (
    <>
      <nav className={`flex flex-row justify-between items-center py-4 `}>
        <Image
          src={logo}
          width={180}
          className="max-md:w-40"
          alt="flyra logo"
        />
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
          <Button
            className="ml-3 px-8 rounded-full"
            onClick={redirectToLoginPage}
          >
            Fazer Login
          </Button>
        </div>
      </nav>
      <Sheet open={isMobileOpened} onOpenChange={setIsMobileOpened}>
        <SheetContent className="max-md:w-full">
          <SheetHeader className="flex flex-row justify-between items-center">
            <Image
              src={logo}
              width={160}
              className="max-md:w-40"
              alt="flyra logo"
            />
            <SheetTitle />
            <SheetClose />
          </SheetHeader>
          <div className="flex flex-col gap-4">
            {navbarItems.map((item, index) => (
              <Link href={item.link} key={index}>
                <span className="hover:text-muted-foreground transition-colors">
                  {item.name}
                </span>
              </Link>
            ))}
            <Button className="px-8 rounded-full" onClick={redirectToLoginPage}>
              Fazer Login
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
