"use client";

import Image from "next/image";
import logoFlyraMini from "@/assets/logos/logo-mini-80x80.png";
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
import useResetPassword from "@/hooks/auth/reset-password/useResetPassword";
import LoadingCircleSpinner from "../shared/loader";
import { useQueryState } from "nuqs";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";

export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TResetPassword>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const [code] = useQueryState("code");
  const [type] = useQueryState("type");

  const { handleResetPassword, isLoading } = useResetPassword();

  const [showPassword, setShowPassword] = useState(false);

  const watchConfirmNewPassword = watch("confirmNewPassword");

  const router = useRouter();

  const onSubmit = async () => {
    if (errors.root) {
      toast.error(errors.root.message);
      return;
    }

    if (!code) return;

    await handleResetPassword({
      code,
      password: watchConfirmNewPassword,
    });
    router.push("/auth/login");
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

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (!code || (type !== "set" && type !== "reset")) {
      toast.error("Código de recuperação inválido");
      router.push("/auth/login");
      return;
    }
  }, [router, code]);

  return (
    <form
      className="w-full h-full flex flex-col items-center justify-center -mt-16"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="flex flex-col gap-2 items-center">
        <Image className="size-20" src={logoFlyraMini} alt="Flyra Logo" />
        <h1 className="text-3xl text-center font-bold text-foreground">
          {type === "reset" ? "Redefinir senha" : "Definir senha"}
        </h1>
      </div>
      <div className="w-full flex flex-col gap-2 items-center">
        <div className="flex w-80 flex-col gap-3 py-6">
          <div className="flex flex-col w-full">
            <Label
              htmlFor="newPassword"
              className="absolute -mt-[0.40rem] ml-3 bg-background text-zinc-300"
            >
              {type === "reset" ? "Nova senha" : "Senha"}
            </Label>
            <Input
              className="h-10"
              type={showPassword ? "text" : "password"}
              id="newPassword"
              {...register("newPassword")}
            />
            {showPassword ? (
              <Eye
                className="relative bottom-8 left-72 -mb-4 cursor-pointer"
                size={22}
                onClick={handleShowPassword}
              />
            ) : (
              <EyeOff
                className="relative bottom-8 left-72 -mb-4 cursor-pointer"
                size={22}
                onClick={handleShowPassword}
              />
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label
              htmlFor="confirmNewPassword"
              className="absolute -mt-[0.40rem] ml-3 bg-background text-zinc-300"
            >
              {type === "reset" ? "Confirmar nova senha" : "Confirmar senha"}
            </Label>
            <Input
              className="h-10"
              type="password"
              id="confirmNewPassword"
              {...register("confirmNewPassword")}
            />
          </div>
          <Button
            className="h-11 text-foreground relative flex flex-row items-center w-full my-1"
            type="submit"
            disabled={isLoading}
          >
            {!isLoading ? "Enviar" : <LoadingCircleSpinner />}
          </Button>
          <Button
            variant={"secondary"}
            className="h-11 text-foreground relative flex flex-row items-center w-full"
            type="button"
            onClick={() => {
              router.push("/auth/login");
            }}
          >
            <ChevronLeft className="!size-5 absolute left-3" />
            Voltar
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
