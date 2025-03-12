/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";
import googleLogo from "@/assets/images/google-logo.svg";
import logoFlyraMini from "@/assets/logos/logo-mini-80x80.png";
import { Eye, EyeOff, RectangleEllipsis } from "lucide-react";
import {
  TUserEmailLogin,
  UserEmailLoginSchema,
} from "@/validations/auth/login.schema";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useOtpLogin } from "@/hooks/auth/login/useOtpLogin";
import { usePasswordLogin } from "@/hooks/auth/login/usePasswordLogin";
import LoadingCircleSpinner from "../shared/loader";

export default function EmailForm({
  setIsOtpLogin,
  setEmail,
}: {
  setIsOtpLogin: (isOtpLogin: boolean) => void;
  setEmail: (email: string) => void;
}) {
  const { sendOtpLoginEmail, isLoadingSendOtp } = useOtpLogin({
    setIsOtpLogin,
  });

  const {
    loginWithEmail,
    isLoadingLogin,
    isLoadingResetPassword,
    resetPassword,
  } = usePasswordLogin();

  const { register, handleSubmit, watch } = useForm<TUserEmailLogin>({
    resolver: zodResolver(UserEmailLoginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const watchEmail = watch("email");

  const onSubmit = (data: TUserEmailLogin): void => {
    loginWithEmail(data.email, data.password);
  };

  const onError = (errors: FieldErrors<TUserEmailLogin>): void => {
    const firstError = Object.values(errors)[0];
    if (firstError?.message) {
      toast.error(firstError.message);
      return;
    }
    toast.error("Ocorreu um erro ao fazer login");
    return;
  };

  const handleGoToOtpLogin = (): void => {
    if (!watchEmail) {
      toast.error(
        "Por favor, preencha o campo de email para seguir com o login.",
      );
      return;
    }

    const emailValidation = z.string().email().safeParse(watchEmail);

    if (!emailValidation.success) {
      toast.error("Por favor, insira um email válido.");
      return;
    }

    sendOtpLoginEmail(watchEmail, true);
  };

  const handlePasswordReset = async (): Promise<void> => {
    if (!watchEmail) {
      toast.error(
        "Por favor, preencha o campo de email para redefinir sua senha.",
      );
      return;
    }

    const emailValidation = z.string().email().safeParse(watchEmail);

    if (!emailValidation.success) {
      toast.error("Por favor, insira um email válido.");
      return;
    }

    await resetPassword(watchEmail);
  };

  useEffect(() => {
    setEmail(watchEmail);
  }, [watchEmail]);

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      className="w-full h-screen justify-center items-center gap-5"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="flex flex-col items-center p-4 gap-2">
        <Image
          src={logoFlyraMini}
          alt="Logo Flyra"
          className="pointer-events-none select-none size-20"
        />
        <h1 className="text-3xl text-center font-bold text-foreground">
          Fazer Login
        </h1>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <div className="flex flex-col gap-2 w-full">
          <Label
            htmlFor="email"
            className="absolute -mt-[0.40rem] ml-3 bg-background text-zinc-300"
          >
            Email
          </Label>
          <Input className="h-10" id="email" {...register("email")} />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label
            htmlFor="password"
            className="absolute -mt-[0.40rem] ml-3 bg-background text-zinc-300"
          >
            Senha
          </Label>
          <Input
            className="h-10"
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          {showPassword ? (
            <Eye
              className="relative bottom-10 left-72 cursor-pointer"
              size={22}
              onClick={handleShowPassword}
            />
          ) : (
            <EyeOff
              className="relative bottom-10 left-72 cursor-pointer"
              size={22}
              onClick={handleShowPassword}
            />
          )}
          <p
            className="text-sm text-muted-foreground cursor-pointer -mt-9 hover:underline hover:text-primary"
            onClick={handlePasswordReset}
          >
            Esqueceu sua senha ou ainda não tem uma?
          </p>
        </div>
      </div>
      <Button
        className="h-11 text-foreground relative flex flex-row items-center w-full my-4"
        type="submit"
        disabled={isLoadingLogin}
      >
        {!isLoadingLogin && !isLoadingResetPassword ? (
          "Entrar"
        ) : (
          <LoadingCircleSpinner />
        )}
      </Button>
      <div className="w-full flex flex-row items-center gap-2 my-1">
        <Separator className="bg-muted w-auto flex-1" />
        <p className="text-sm">ou</p>
        <Separator className="bg-muted w-auto flex-1" />
      </div>
      <div className="flex flex-col gap-3 p-3 w-full">
        <Button
          variant={"secondary"}
          className="h-11 text-foreground relative flex flex-row items-center w-full"
        >
          <Image
            src={googleLogo}
            alt="Google Logo"
            className="pointer-events-none select-none size-5 absolute left-3"
          />
          Continuar com Google
        </Button>
        <Button
          variant={"secondary"}
          className="h-11 text-foreground relative flex flex-row items-center w-full"
          type="button"
          onClick={handleGoToOtpLogin}
        >
          <RectangleEllipsis className="!size-5 absolute left-3" />
          {!isLoadingSendOtp ? (
            "Receber código de login por email"
          ) : (
            <LoadingCircleSpinner />
          )}
        </Button>
      </div>
      <div className="flex flex-col gap-1 items-center text-sm absolute inset-x-0 bottom-4">
        <p>Copyright © 2025 Flyra Drones, Inc.</p>
        <p>v0.0.1-rick-primarious</p>
      </div>
    </form>
  );
}
