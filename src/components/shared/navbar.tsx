"use client";
import Image from "next/image";
import logo from "@/assets/logos/logo-full-373x131.png";
import { Button } from "../ui/button";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);

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
                  <HoveredLink href="/about-us">Sobre nós</HoveredLink>
                  <HoveredLink href="/team">Nossa Equipe</HoveredLink>
                  <HoveredLink href="/faq">
                    Perguntas Frequentes (FAQ)
                  </HoveredLink>
                  <HoveredLink href="/contact">Contato</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Nossa Rede">
                <div className="flex flex-col space-y-4 text-sm">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/flyra"
                  >
                    Linkedin
                  </Link>
                  <Link target="_blank" href="https://github.com/Flyra-Drones">
                    Github
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/flyra.tech"
                  >
                    Instagram
                  </Link>
                </div>
              </MenuItem>
              <Link href="/blog/post/flyra-drones-inteligentes-para-combate-a-incendios-em-areas-remotas">
                <p className="text-md">Blog</p>
              </Link>
            </div>
            <Link href="/download">
              <Button className="px-6 rounded-sm">Download</Button>
            </Link>
          </div>
        </div>
      </Menu>
    </div>
  );
}
