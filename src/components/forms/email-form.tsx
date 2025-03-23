"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import Image from "next/image";
import logoFlyraMini from "@/assets/logos/logo-mini-260x260.png";
import { Eye, EyeOff } from "lucide-react";
import {
  TUserEmailLogin,
  UserEmailLoginSchema,
} from "@/validations/auth/login.schema";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { toast } from "sonner";
import LoadingCircleSpinner from "../ui/loader";
import { useAuth } from "@/hooks/auth/login/useAuth";
import { Separator } from "../ui/separator";

export default function EmailForm() {
  const { loginWithEmail, isLoadingLogin } = useAuth();

  const { register, handleSubmit } = useForm<TUserEmailLogin>({
    resolver: zodResolver(UserEmailLoginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

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

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      className="w-full justify-center items-center gap-5 px-1"
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
        <p className="text-center text-sm">
          Atenção: apenas administradores da Flyra podem acessar esta área.
        </p>
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
          <div className="relative w-full h-10">
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
                className="absolute inset-0 my-auto left-[calc(100%-32px)] size-5 cursor-pointer"
                onClick={handleShowPassword}
              />
            ) : (
              <EyeOff
                className="absolute inset-0 my-auto left-[calc(100%-32px)] size-5 cursor-pointer"
                onClick={handleShowPassword}
              />
            )}
          </div>
        </div>
      </div>
      <Separator className="mt-4" />
      <Button
        className="h-11 text-foreground relative flex flex-row items-center w-full my-4"
        type="submit"
        disabled={isLoadingLogin}
      >
        {!isLoadingLogin ? "Entrar" : <LoadingCircleSpinner />}
      </Button>
      <div className="flex flex-col gap-1 items-center text-sm">
        <p>Copyright © 2025 Flyra, Inc.</p>
        <p>v0.0.1-rick-primarious</p>
      </div>
    </form>
  );
}
