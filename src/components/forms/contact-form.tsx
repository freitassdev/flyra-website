"use client";

import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  ContactFormSchema,
  TContactForm,
} from "@/validations/contact/contactForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { Mail, MessageCircleMore, User, Cuboid } from "lucide-react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactForm>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = (data: TContactForm) => {
    toast.success("Mensagem enviada. Agradecemos o contato!");

    const form = document.querySelector("form");
    if (form) form.reset();
  };

  return (
    <form
      className="min-w-[28rem] h-fit flex flex-col gap-5 p-5 pb-6 rounded-md backdrop-blur-sm bg-background/30"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col justify-between items-center gap-3 md:flex-row">
        <div className="max-[412px]:px-12 w-full mt-3">
          <Label
            className="absolute -mt-[0.40rem] ml-3 bg-background/50 select-none backdrop-blur-sm"
            htmlFor="name"
          >
            Nome
          </Label>
          <Input className="w-full pr-9" id="name" {...register("name")} />
          <User
            size={20}
            className="relative bottom-[1.8rem] left-[93%] md:left-[87%] -mb-4 text-secondary rounded-full backdrop-blur-sm"
          />
          <span className="text-xs text-red-400 absolute select-none backdrop-blur-sm">
            {errors.name?.message}
          </span>
        </div>
        <div className="max-[412px]:px-12 w-full mt-3">
          <Label
            className="absolute -mt-[0.40rem] ml-3 bg-background/50 select-none backdrop-blur-sm"
            htmlFor="email"
          >
            Email
          </Label>
          <Input className="w-full pr-9" id="email" {...register("email")} />
          <Mail
            size={20}
            className="relative bottom-[1.8rem] left-[93%] md:left-[87%] -mb-4 text-secondary rounded-full backdrop-blur-sm"
          />
          <span className="text-xs text-red-400 absolute select-none">
            {errors.email?.message}
          </span>
        </div>
      </div>
      <div className="max-[412px]:px-12 w-full">
        <Label
          className="absolute -mt-[0.40rem] ml-3 bg-background/50 select-none backdrop-blur-sm"
          htmlFor="subject"
        >
          Assunto
        </Label>
        <Input id="subject" className="w-full pr-9" {...register("subject")} />
        <Cuboid
          size={20}
          className="relative bottom-[1.8rem] left-[93%] md:left-[93.8%] -mb-4 text-secondary rounded-full backdrop-blur-sm"
        />
        <span className="text-xs text-red-400 absolute select-none">
          {errors.subject?.message}
        </span>
      </div>
      <div className="max-[412px]:px-12 w-full">
        <Label
          className="absolute -mt-[0.40rem] ml-3 bg-background/50 select-none backdrop-blur-sm"
          htmlFor="message"
        >
          Mensagem
        </Label>
        <Textarea
          rows={3}
          id="message"
          className="w-full pr-7"
          {...register("message")}
        />
        <MessageCircleMore
          size={20}
          className="relative bottom-20 md:bottom-[4.5rem] left-[93%] md:left-[93.8%] -mb-4 text-secondary rounded-full backdrop-blur-sm"
        />
        <span className="text-xs text-red-400 absolute select-none">
          {errors.message?.message}
        </span>
      </div>
      <Button
        type="submit"
        className="max-[412px]:w-20 w-full select-none self-center"
        disabled={Object.keys(errors).length > 0 ? true : false}
      >
        <span className="text-sm">Enviar</span>
      </Button>
    </form>
  );
}
