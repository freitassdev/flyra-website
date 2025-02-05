import logoFlyraMini from "@/assets/logos/logo-mini-80x80.png";
import EmailForm from "@/components/login/email-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="w-full h-screen justify-center items-center overflow-hidden">
      <div className="flex flex-col items-center p-4 gap-2">
        <Image
          src={logoFlyraMini}
          alt="Logo Flyra"
          className="pointer-events-none select-none"
        />
        <h1 className="text-3xl text-center font-bold text-foreground">
          Fazer Login
        </h1>
      </div>
      <EmailForm />
    </div>
  );
}
