"use client";

import Image from "next/image";
import logoFlyraMini from "@/assets/logos/logo-mini-80x80.png";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  TResetPassword,
  ResetPasswordSchema,
} from "@/validations/auth/resetPassword.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useResetPassword from "@/hooks/auth/useResetPassword";
import LoadingCircleSpinner from "../shared/loader";

export default function ResetPasswordForm() {
  const [code, setCode] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TResetPassword>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const { handleResetPassword, isLoading } = useResetPassword();

  const watchConfirmNewPassword = watch("confirmNewPassword");

  const router = useRouter();

  const onSubmit = async () => {
    if (errors.root) {
      toast.error(errors.root.message);
      return;
    }

    await handleResetPassword({
      code,
      newPassword: watchConfirmNewPassword,
    })
      .then(() => {
        toast.success(
          "Senha redefinida com sucesso! Redirecionando para a página de login...",
        );
        setTimeout(() => router.push("/auth/login"), 2500);
      })
      .catch(() => {
        toast.error("Ocorreu um erro ao redefinir sua senha");
      });
  };

  useEffect(() => {
    console.log(code);
  }, [code]);

  return (
    <form
      className="w-full h-screen justify-center items-center gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 items-center">
        <Image className="size-20" src={logoFlyraMini} alt="Flyra Logo" />
        <h1 className="text-3xl text-center font-bold text-foreground">
          Redefinir senha
        </h1>
        <p className="text-md text-center">
          Digite o código de redefinição de 6 dígitos que enviamos para seu
          e-mail.
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex flex-col gap-5 items-center py-6">
          <div className="flex flex-col gap-2 w-full">
            <Label className="absolute -mt-[0.40rem] ml-3 bg-background text-zinc-300 z-20">
              Código
            </Label>
            <InputOTP
              maxLength={6}
              value={code}
              onChange={(value) => setCode(value)}
              pattern={REGEXP_ONLY_DIGITS}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label className="absolute -mt-[0.40rem] ml-3 bg-background text-zinc-300">
              Nova senha
            </Label>
            <Input className="h-10" {...register("newPassword")} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label className="absolute -mt-[0.40rem] ml-3 bg-background text-zinc-300">
              Confimar nova senha
            </Label>
            <Input className="h-10" {...register("confirmNewPassword")} />
          </div>
          <Button
            className="h-11 text-foreground relative flex flex-row items-center w-full my-4"
            type="submit"
            disabled={isLoading}
          >
            {!isLoading ? "Enviar" : <LoadingCircleSpinner />}
          </Button>
        </div>
      </div>
    </form>
  );
}
