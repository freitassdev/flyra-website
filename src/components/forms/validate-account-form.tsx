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
} from "@/validations/reset-password/resetPassword.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import LoadingCircleSpinner from "../shared/loader";
import useValidateAccountCode from "@/hooks/auth/validate-account/useValidateAccountCode";

export default function ValidateAccountForm() {
  const [code, setCode] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TResetPassword>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const { handleValidateAccount, isLoading } = useValidateAccountCode();

  const watchConfirmNewPassword = watch("confirmNewPassword");

  const router = useRouter();

  const onSubmit = async () => {
    if (errors.root) {
      toast.error(errors.root.message);
      return;
    }

    await handleValidateAccount({
      code,
      newPassword: watchConfirmNewPassword,
    })
      .then(() => {
        toast.success(
          "Senha redefinida com sucesso! Redirecionando para a página de login...",
        );
        router.push("/auth/login");
      })
      .catch(() => {
        toast.error("Ocorreu um erro ao redefinir sua senha");
      });
  };

  const onError = (errors: FieldErrors<TResetPassword>): void => {
    const firstError = Object.values(errors)[0];
    if (firstError?.message) {
      toast.error(firstError.message);
      return;
    }
    toast.error("Ocorreu um erro ao redesinir sua senha");
    return;
  };

  useEffect(() => {
    console.log(code);
  }, [code]);

  return (
    <form
      className="w-full h-full flex flex-col mt-[4vh]"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="flex flex-col gap-2 items-center">
        <Image className="size-20" src={logoFlyraMini} alt="Flyra Logo" />
        <h1 className="text-3xl text-center font-bold text-foreground">
          Validação de conta
        </h1>
        <p className="text-md text-center">
          Digite o código de redefinição de 6 dígitos que enviamos para seu
          e-mail.
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex flex-col gap-5 py-6">
          <div className="flex flex-col gap-2 w-full">
            <Label
              htmlFor="code"
              className="absolute -mt-[0.40rem] ml-3 bg-background text-zinc-300 z-20"
            >
              Código
            </Label>
            <InputOTP
              maxLength={6}
              value={code}
              onChange={(value) => setCode(value)}
              pattern={REGEXP_ONLY_DIGITS}
              id="code"
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
            <Label
              htmlFor="newPassword"
              className="absolute -mt-[0.40rem] ml-3 bg-background text-zinc-300"
            >
              Nova senha
            </Label>
            <Input
              className="h-10"
              type="password"
              id="newPassword"
              {...register("newPassword")}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label
              htmlFor="confirmNewPassword"
              className="absolute -mt-[0.40rem] ml-3 bg-background text-zinc-300"
            >
              Confimar nova senha
            </Label>
            <Input
              className="h-10"
              type="password"
              id="confirmNewPassword"
              {...register("confirmNewPassword")}
            />
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
      <div className="flex flex-col gap-1 items-center text-sm absolute inset-x-0 bottom-4">
        <p>Copyright © 2025 Flyra Drones, Inc.</p>
        <p>v0.0.1-rick-primarious</p>
      </div>
    </form>
  );
}
