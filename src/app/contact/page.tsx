import ContactForm from "@/components/forms/contact-form";
import Footer from "@/components/global/footer";
import Navbar from "@/components/shared/navbar";
import Image from "next/image";
import logo from "@/assets/logos/logo-mini-260x260.png";

export default function ContactPage() {
  return (
    <div>
      <div className="absolute top-0 z-10 h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(77,139,255,0.3),rgba(255,255,255,0))]" />
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-center items-center relative gap-7 z-20">
        <div className="flex flex-col items-center">
          <Image src={logo} width={112} alt="Flyra logo" />
          <h1 className="max-w-96 text-4xl font-bold text-center z-20">
            Entre em contato
          </h1>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
