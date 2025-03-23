import Footer from "@/components/global/footer";
import Introduction from "@/components/global/hero-section";
import Navbar from "@/components/global/navbar";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Navbar />
      <Introduction />
      <Footer />
    </div>
  );
}
