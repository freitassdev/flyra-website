"use client";
import Image from "next/image";
import logo from "@/assets/logos/logo-full-373x131.png";
// import Link from "next/link";
// import { LucideDot } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
              <MenuItem setActive={setActive} active={active} item="Nossa Rede">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/hobby">Linkedin</HoveredLink>
                  <HoveredLink href="/individual">Github</HoveredLink>
                  <HoveredLink href="/team">Instagram</HoveredLink>
                </div>
              </MenuItem>
              <Link href="/blog/post/flyra-drones-inteligentes-para-combate-a-incendios-em-areas-remotas">
                <p className="text-md">Blog</p>
              </Link>
            </div>
            <Button className="px-6 rounded-sm">Download</Button>
          </div>
        </div>
      </Menu>
    </div>
  );
}
