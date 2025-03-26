import AboutUsPage from "@/components/global/about-us";
import Footer from "@/components/global/footer";
import Navbar from "@/components/shared/navbar";

export default function AboutUs() {
  return (
    <div className="w-full relative">
      <Navbar />
      <AboutUsPage />
      <Footer />
    </div>
  );
}
