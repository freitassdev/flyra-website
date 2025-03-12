import backgroundLogo from "@/assets/images/background-logo.png";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Navbar />
      <Image
        src={backgroundLogo}
        alt=""
        className="pointer-events-none absolute -z-10 opacity-40 w-[90dvh]"
      />
      <Footer />
    </div>
  );
}
