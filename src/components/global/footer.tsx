import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-t-muted mt-10 bg-background w-full mx-auto">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-4 gap-8 px-4 py-6 lg:py-8  max-md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-foreground">
              Empresa
            </h2>
            <ul className=" text-muted-foreground font-medium">
              <li className="mb-4">
                <Link href="/about-us" className="hover:underline">
                  Sobre
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/not-found" className="hover:underline">
                  Centro de Marca
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-foreground">
              Centro de Ajuda
            </h2>
            <ul className=" text-muted-foreground font-medium">
              <li className="mb-4">
                <a target="_blank" className="hover:underline">
                  Discord
                </a>
              </li>
              <li className="mb-4">
                <a target="_blank" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a
                  target="_blank"
                  href="https://www.instagram.com/flyra.tech"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <Link href="/contact" className="hover:underline">
                  Contate-nos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-foreground">
              Legal
            </h2>
            <ul className=" text-muted-foreground font-medium">
              <li className="mb-4">
                <Link href="/not-found" className="hover:underline">
                  Política de Privacidade
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/not-found" className="hover:underline">
                  Licenciamento
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/not-found" className="hover:underline">
                  Termos e Condições
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-foreground">
              Download dos Aplicativos
            </h2>
            <ul className=" text-muted-foreground font-medium">
              <li className="mb-4">
                <Link href="/download" className="hover:underline">
                  iOS
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/download" className="hover:underline">
                  Android
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/download" className="hover:underline">
                  Windows
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/download" className="hover:underline">
                  MacOS
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-background border-t-2 border-t-muted md:flex md:items-center md:justify-between">
          <span className="text-sm  dark:text-gray-300 sm:text-center">
            Copyright © 2025
            <a href="https://flyra.tech/"> Flyra Drones, Inc.</a>
          </span>
          <div className="flex items-center mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <Link
              href="https://www.instagram.com/flyra.tech"
              className="text-gray-400 hover dark:hover:text-white"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/flyra/"
              className="text-gray-400 hover dark:hover:text-white"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">Linkedin page</span>
            </Link>
            <Link
              href="https://github.com/Flyra-Drones"
              className="text-gray-400 hover dark:hover:text-white"
            >
              <Github className="w-5" />
              <span className="sr-only">GitHub organization</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
