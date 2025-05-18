import ContactForm from "@/components/forms/contact-form";
import Footer from "@/components/global/footer";
import Navbar from "@/components/shared/navbar";
import Image from "next/image";
import logo from "@/assets/logos/logo-mini-260x260.png";
import cartoon from "@/assets/images/cartoon-contact.png";
import { BoxAnimate } from "@/components/shared/box-animate";
import { TextShadow } from "@/components/shared/text-shadow";

export default function ContactPage() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 z-10 h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(77,139,255,0.3),rgba(255,255,255,0))]" />
      <Navbar />
      <div className="w-full min-h-screen pt-32 md:pt-0 flex flex-col justify-center items-center relative gap-7 z-20">
        <BoxAnimate
          className="flex flex-col items-center"
          delay={0.2}
          type="fade"
        >
          <Image src={logo} width={112} alt="Flyra logo" />
          <TextShadow>
            <h1 className="max-w-96 text-2xl font-bold text-center z-20 md:text-4xl">
              Entre em contato
            </h1>
          </TextShadow>
          <p className="max-w-lg text-sm text-center text-secondary z-20 px-4 md:max-w-2xl md:text-base">
            Se você tem alguma dúvida ou deseja mais informações sobre nossos
            serviços, entre em contato conosco. Estamos aqui para ajudar!
          </p>
        </BoxAnimate>
        <div className="flex flex-col items-center rounded-md p-5 gap-6 z-20 md:flex-row">
          <div className="w-40 h-40 blur-3xl absolute bottom-1/3 right-2/3 bg-primary/30 -z-0 max-md:top-1/3 max-md:left-1/3" />
          <BoxAnimate delay={0.5} duration={0.3} from="right">
            <Image
              src={cartoon}
              alt="consulting image"
              className="w-[18rem] max-sm:w-56 max-md:w-72"
            />
          </BoxAnimate>
          <BoxAnimate delay={0.5} duration={0.3} from="left">
            <ContactForm />
          </BoxAnimate>
        </div>
      </div>
      <Footer />
    </div>
  );
}
