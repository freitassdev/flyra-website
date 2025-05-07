"use client";
import Image from "next/image";
import logo from "@/assets/logos/logo-full-373x131.png";
import { Button } from "../ui/button";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import { Separator } from "../ui/separator";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="">
      {!mobileOpen && (
        <div className={cn("fixed top-5 inset-x-0 max-w-6xl mx-auto z-50")}>
          <Menu setActive={setActive}>
            <div className="w-full flex flex-row justify-between items-center px-4">
              <Link href={"/"} className="flex flex-row items-center">
                <Image src={logo} alt="logo" className="w-auto" height={40} />
              </Link>
              <div className="md:hidden">
                <button onClick={() => setMobileOpen(!mobileOpen)}>
                  <MenuIcon size={24} />
                </button>
              </div>
              <div className="hidden md:flex flex-row items-center justify-start gap-10">
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
                  <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Nossa Rede"
                  >
                    <div className="flex flex-col space-y-4 text-sm">
                      <Link
                        target="_blank"
                        href="https://www.linkedin.com/company/flyra"
                      >
                        Linkedin
                      </Link>
                      <Link
                        target="_blank"
                        href="https://github.com/Flyra-Drones"
                      >
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
      )}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: "20%", opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="md:hidden w-full fixed mt-5 px-8 flex flex-col gap-4 shadow-md py-3 z-50 rounded-2xl border bg-background/80 border-card backdrop-blur-md justify-start items-center space-x-4 overflow-hidden"
          >
            <div className="w-full flex flex-row items-center justify-between">
              <Image src={logo} alt="logo" className="w-auto" height={30} />
              <button onClick={() => setMobileOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="w-full flex flex-col gap-2">
              <p className="text-sm text-foreground/70 mt-2">Institucional</p>
              <Separator />
              <Link href="/about-us">Sobre nós</Link>
              <Link href="/team">Nossa Equipe</Link>
              <Link href="/faq">Perguntas Frequentes (FAQ)</Link>
              <Link href="/contact">Contato</Link>
              <p className="text-sm text-foreground/70 mt-2">Nossa Rede</p>
              <Separator />
              <Link
                href="https://www.linkedin.com/company/flyra"
                target="_blank"
              >
                Linkedin
              </Link>
              <Link href="https://github.com/Flyra-Drones" target="_blank">
                Github
              </Link>
              <Link href="https://www.instagram.com/flyra.tech" target="_blank">
                Instagram
              </Link>
              <Separator />
              <Link
                className="my-2"
                href="/blog/post/flyra-drones-inteligentes-para-combate-a-incendios-em-areas-remotas"
              >
                Blog
              </Link>
            </div>

            <Link className="w-full" href="/download">
              <Button className="w-full">Download</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
