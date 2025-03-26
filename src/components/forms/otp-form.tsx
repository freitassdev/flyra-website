"use client";

import logoFlyraMini from "@/assets/logos/logo-mini-80x80.png";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useOtpLogin } from "@/hooks/auth/login/useOtpLogin";
import { useState } from "react";
import { ValidateCodeLoginSchema } from "@/validations/auth/validateCode.schema";
import LoadingCircleSpinner from "../ui/loader";

export default function OtpForm({
  setIsOtpLogin,
  email,
}: {
  setIsOtpLogin: (isOtpLogin: boolean) => void;
  email: string;
}) {
  const [otpCode, setOtpCode] = useState("");
  const {
    otpTimer,
    isLoadingSendOtp,
    sendOtpLoginEmail,
    isLoadingLogin,
    loginWithOtpCode,
  } = useOtpLogin({
    isOtpForm: true,
  });

  const submit = (email: string, code: string): void => {
    const result = ValidateCodeLoginSchema.safeParse({ email, code });

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    loginWithOtpCode(email, code);
  };

  return (
    <div className="px-1 flex flex-col gap-5">
      <div className="flex flex-col gap-2 items-center">
        <Image className="size-20" src={logoFlyraMini} alt="Flyra Logo" />
        <h1 className="text-3xl text-center font-bold text-foreground">
          Código de Login
        </h1>
        <p className="text-md text-center">
          Digite o código de login de 6 dígitos que enviamos para seu e-mail.
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <div className="flex flex-col items-center gap-2 w-full">
          <InputOTP
            maxLength={6}
            value={otpCode}
            onChange={(value) => setOtpCode(value)}
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
          <p
            className={cn("text-sm cursor-pointer", {
              "opacity-50 cursor-not-allowed": otpTimer > 0 || isLoadingSendOtp,
            })}
            onClick={() => {
              if (otpTimer === 0 && !isLoadingSendOtp) {
                sendOtpLoginEmail(email);
                return;
              }
            }}
          >
            Reenviar e-mail {otpTimer > 0 && `(${otpTimer}s)`}
          </p>
        </div>
        <Button
          className="h-11 text-foreground relative flex flex-row items-center w-full"
          type="button"
          onClick={() => submit(email, otpCode)}
          disabled={isLoadingLogin || isLoadingSendOtp}
        >
          {!isLoadingLogin && !isLoadingSendOtp ? (
            "Entrar"
          ) : (
            <LoadingCircleSpinner />
          )}
        </Button>
        <Button
          variant={"secondary"}
          className="h-11 text-foreground relative flex flex-row items-center w-full"
          type="button"
          onClick={() => {
            setIsOtpLogin(false);
          }}
        >
          <ChevronLeft className="!size-5 absolute left-3" />
          Voltar
        </Button>
        <div className="flex flex-col gap-1 items-center text-sm">
          <p>Copyright © 2025 Flyra Drones, Inc.</p>
          <p>v0.0.1-rick-primarious</p>
        </div>
      </div>
    </div>
  );
}
