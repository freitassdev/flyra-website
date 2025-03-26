import { Github, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="max-w-6xl border-t-2 border-t-muted mt-10 bg-background w-full mx-auto">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-4 gap-8 px-4 py-6 lg:py-8  max-md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-foreground">
              Empresa
            </h2>
            <ul className=" text-muted-foreground font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Sobre
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Centro de Marca
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-foreground">
              Centro de Ajuda
            </h2>
            <ul className=" text-muted-foreground font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Discord
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contate-nos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-foreground">
              Legal
            </h2>
            <ul className=" text-muted-foreground font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Política de Privacidade
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licenciamento
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Termos e Condições
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-foreground">
              Download dos Aplicativos
            </h2>
            <ul className=" text-muted-foreground font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-background border-t-2 border-t-muted md:flex md:items-center md:justify-between">
          <span className="text-sm  dark:text-gray-300 sm:text-center">
            Copyright © 2025
            <a href="https://flyra.tech/"> Flyra Drones, Inc.</a>
          </span>
          <div className="flex items-center mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" className="text-gray-400 hover dark:hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[22.5px] h-[22.5px]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M 9.3769531 4.0039062 C 8.5089531 4.0039062 6.1811406 4.3226094 5.2441406 4.5996094 C 4.3761406 4.8556094 3.6552344 5.4479531 3.2402344 6.2519531 C 2.3502344 7.9739531 0.997 11.501531 1 17.019531 C 2.067 18.340531 5.7198125 20 8.0078125 20 L 9 18.65625 C 9 18.65625 10.653 19.019531 12 19.019531 L 12.013672 19.019531 C 13.360672 19.019531 15.013672 18.65625 15.013672 18.65625 L 16 20 C 17 20 20.494672 19.461531 23.013672 17.019531 C 23.016672 11.501531 21.663438 7.9729531 20.773438 6.2519531 C 20.358438 5.4489531 19.636531 4.8556094 18.769531 4.5996094 C 17.339531 4.1056094 14.521484 4.0039063 14.521484 4.0039062 L 14.001953 5.1425781 C 14.001953 5.1425781 12.672 5 12 5 C 11.329 5 10.013672 5.1425781 10.013672 5.1425781 L 9.3769531 4.0039062 z M 8.1972656 6.0078125 C 8.4792656 6.7598125 8.8789062 7.1464844 8.8789062 7.1464844 C 8.8789062 7.1464844 11.597672 6.9882813 12.013672 6.9882812 C 12.415672 6.9882812 15.158203 7.1464844 15.158203 7.1464844 C 15.158203 7.1464844 15.534406 6.7598125 15.816406 6.0078125 C 16.113406 6.0248125 16.833125 6.1125781 18.203125 6.5175781 C 18.550125 6.6205781 18.832094 6.8509219 18.996094 7.1699219 C 19.684094 8.5009219 20.858 11.424547 21 16.060547 C 21.001 16.101547 20.979359 16.146781 20.943359 16.175781 C 19.737359 17.143781 18.380313 17.748609 16.945312 17.974609 L 16.869141 17.853516 C 17.770624 17.449485 18.400391 17.080078 18.400391 17.080078 L 17.349609 15.376953 C 17.349609 15.376953 14.606222 17 12 17 C 9.3937778 17 6.6503906 15.376953 6.6503906 15.376953 L 5.5996094 17.080078 C 5.5996094 17.080078 6.2328457 17.451408 7.140625 17.857422 L 7.0703125 17.972656 C 5.6123125 17.740656 4.2663125 17.136781 3.0703125 16.175781 C 3.0343125 16.146781 3.0126719 16.1035 3.0136719 16.0625 C 3.1556719 11.4255 4.3295781 8.5009219 5.0175781 7.1699219 C 5.1815781 6.8519219 5.4635469 6.6205781 5.8105469 6.5175781 C 7.1805469 6.1135781 7.9012656 6.0258125 8.1972656 6.0078125 z M 8.5 10 A 1.5 2 0 0 0 8.5 14 A 1.5 2 0 0 0 8.5 10 z M 15.5 10 A 1.5 2 0 0 0 15.5 14 A 1.5 2 0 0 0 15.5 10 z"></path>
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-gray-400 hover dark:hover:text-white">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-400 hover dark:hover:text-white">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-400 hover dark:hover:text-white">
              <Github className="w-5" />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
