import EmailForm from "@/components/forms/email-form";

export default function LoginPage() {
  return (
    <div className="w-full h-full flex justify-center items-center text-card-foreground relative">
      <div className="relative overflow-hidden w-full h-full max-w-xs flex items-center justify-center">
        <div className="absolute w-full h-full flex flex-col justify-center">
          <EmailForm />
        </div>
      </div>
      <div className="absolute -z-10 inset-0  h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
    </div>
  );
}
