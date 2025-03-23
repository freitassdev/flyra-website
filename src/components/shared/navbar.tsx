"use client";
import Image from "next/image";
import logo from "@/assets/logos/logo-full-373x131.png";
// import Link from "next/link";
// import { LucideDot } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
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
  const [active, setActive] = useState<string | null>(null);

  const router = useRouter();
  const redirectToLoginPage = () => {
    router.push("/auth/login");
  };

  return (
    <div className={cn("fixed top-5 inset-x-0 max-w-6xl mx-auto z-50")}>
      <Menu setActive={setActive}>
        <div className="w-full flex flex-row justify-between items-center">
          <Image src={logo} alt="logo" className="w-auto" height={30} />
          <div className="flex flex-row items-center justify-start gap-10">
            <div className="flex flex-row items-center justify-start gap-5">
              <MenuItem
                setActive={setActive}
                active={active}
                item="Institucional"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/about">Sobre nós</HoveredLink>
                  <HoveredLink href="/team">Nossa Equipe</HoveredLink>
                  <HoveredLink href="/faq">
                    Perguntas Frequentes (FAQ)
                  </HoveredLink>
                  <HoveredLink href="/branding">Contato</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Products">
                <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Algochurn"
                    href="https://algochurn.com"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="Tailwind Master Kit"
                    href="https://tailwindmasterkit.com"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Production ready Tailwind css components for your next project"
                  />
                  <ProductItem
                    title="Moonbeam"
                    href="https://gomoonbeam.com"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                    description="Never write from scratch again. Go from idea to blog in minutes."
                  />
                  <ProductItem
                    title="Rogue"
                    href="https://userogue.com"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Blog">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/hobby">Hobby</HoveredLink>
                  <HoveredLink href="/individual">Individual</HoveredLink>
                  <HoveredLink href="/team">Team</HoveredLink>
                  <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                </div>
              </MenuItem>
            </div>
            <Button className="px-6 rounded-sm">Download</Button>
          </div>
        </div>
      </Menu>
    </div>
  );
}
