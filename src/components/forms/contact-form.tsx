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
  };

  return (
    <form
      className="min-w-96 flex flex-col gap-5 p-5 rounded-md border-primary/40 border-[1px] backdrop-blur-sm bg-background/30 shadow-sm shadow-primary/20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="">
        <Label>Nome</Label>
        <Input
          className=""
          {...register("name")}
          placeholder="Digite seu nome completo"
        />
        <span className="text-sm text-red-400 absolute select-none">
          {errors.name?.message}
        </span>
      </div>
      <div className="">
        <Label>Email</Label>
        <Input
          className=""
          {...register("email")}
          placeholder="Digite seu email"
        />
        <span className="text-sm text-red-400 absolute select-none">
          {errors.email?.message}
        </span>
      </div>
      <div className="">
        <Label>Assunto</Label>
        <Input
          className=""
          {...register("subject")}
          placeholder="Digite o assunto"
        />
        <span className="text-sm text-red-400 absolute select-none">
          {errors.subject?.message}
        </span>
      </div>
      <div className="">
        <Label>Mensagem</Label>
        <Textarea
          rows={3}
          className=""
          {...register("message")}
          placeholder="Digite sua mensagem"
        />
        <span className="text-sm text-red-400 absolute select-none">
          {errors.message?.message}
        </span>
      </div>
      <Button
        type="submit"
        className={
          "w-full select-none " + errors.message?.message ? "mt-3" : "mt-0"
        }
        disabled={Object.keys(errors).length > 0 ? true : false}
      >
        <span className="text-sm">Enviar</span>
      </Button>
    </form>
  );
}
