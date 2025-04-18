import Footer from "@/components/global/footer";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/logos/logo-mini-260x260.png";
import { Monitor, Smartphone, Download as DownloadIcon } from "lucide-react";

export default function DownloadPage() {
  return (
    <div className="relative h-full w-full">
      <Navbar />
      <div className="w-screen h-full relative bg-background overflow-hidden">
        <div className="absolute inset-0 bg-primary/30 bg-[size:20px_20px] opacity-20 blur-[100px] top-0 z-0" />
        <div className="flex flex-col items-center justify-center h-screen gap-6 z-20">
          <Image src={logo} width={120} alt="Flyra logo" />
          <h1 className="w-1/3 text-5xl font-bold text-center z-20">
            Venha fazer parte de um futuro mais seguro e sustentável!
          </h1>
          <Button className="p-5 z-20">
            <DownloadIcon /> Download para Windows
          </Button>
          <div className="flex flex-row w-1/2 items-center justify-center gap-4 mt-4">
            <div className="w-1/3 h-[1px] bg-foreground/30" />
            <span className="text-foreground/80 text-center">
              Também disponível para
            </span>
            <div className="w-1/3 h-[1px] bg-foreground/30" />
          </div>
          <div className="flex flex-row gap-8 mt-4">
            <div className="flex flex-col gap-2">
              <p className="flex mb-3">
                <Smartphone className="mr-1" /> Mobile
              </p>
              <Button variant="card" className="p-5 z-20">
                Android
              </Button>
              <Button variant="card" className="p-5 z-20">
                iOS
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex mb-3">
                <Monitor className="mr-1" /> Desktop
              </p>
              <Button variant="card" className="p-5 z-20">
                Linux
              </Button>
              <Button variant="card" className="p-5 z-20">
                Mac OS
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
