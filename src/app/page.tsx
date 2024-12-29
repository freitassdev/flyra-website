import backgroundLogo from "@/assets/images/background-logo.png";
import Navbar from "@/components/global/navbar";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Navbar />
      teste
      <Image
        src={backgroundLogo}
        alt=""
        className="pointer-events-none absolute -z-10 opacity-40 w-[90dvh]"
      />
    </div>
  );
}
