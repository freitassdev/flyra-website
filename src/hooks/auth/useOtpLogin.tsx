/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import {
  ISendOtpInput,
  sendOtpEmail,
  TSendOtpResponse,
} from "@/services/queries/login/send-otp-email.query";
import { useEffect, useState } from "react";
import {
  ILoginWithOtpInput,
  loginWithOtp,
  TLoginWithOtpResponse,
} from "@/services/queries/login/login-with-otp.query";
import { useLocalStorage } from "@/hooks/misc/useLocalStorage";
import { useUserStore } from "@/hooks/stores/userUserStore";

interface IUseOtpLogin {
  setIsOtpLogin?: (isOtpLogin: boolean) => void;
  isOtpForm?: boolean;
}

const useOtpLogin = ({ setIsOtpLogin, isOtpForm }: IUseOtpLogin) => {
  const [isOtpSended, setIsOtpSended] = useState(false);
  const [otpTimer, setOtpTimer] = useState(isOtpForm ? 60 : 0);
  const [isAbleToGoToOtp, setIsAbleToGoToOtp] = useState(false);
  const { setItem } = useLocalStorage();
  const { setUser } = useUserStore((store) => store);

  const { mutate: sendOtpMutate, isPending: sendOtpIsPending } = useMutation<
    TSendOtpResponse,
    AxiosError<TSendOtpResponse>,
    ISendOtpInput
  >({
    mutationKey: ["send-otp-email"],
    mutationFn: sendOtpEmail,
    onSuccess: (data) => {
      if (data.error) {
        toast.error(data.message);
        return;
      }
      if (!data.success) {
        toast.error("Falha ao enviar código de login");
        return;
      }

      setIsOtpSended(true);
      if (isAbleToGoToOtp) {
        setIsAbleToGoToOtp(false);
        setIsOtpLogin && setIsOtpLogin(true);
      }

      setOtpTimer(60);
      const interval = setInterval(() => {
        setOtpTimer((prev) => {
          if (prev <= 1) clearInterval(interval);
          return prev - 1;
        });
      }, 1000);
      toast.success("Código de login enviado com sucesso, confira seu e-mail");
    },
    onError: (error) => {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error("Ocorreu um erro ao enviar seu código de login");
    },
  });

  const { mutate, isPending } = useMutation<
    TLoginWithOtpResponse,
    AxiosError<TLoginWithOtpResponse>,
    ILoginWithOtpInput
  >({
    mutationKey: ["login-with-otp"],
    mutationFn: loginWithOtp,
    onSuccess: (data) => {
      if (data.error) {
        toast.error(data.message);
        return;
      }
      if (!data.success) {
        toast.error("Falha ao realizar login");
        return;
      }
      if (data.token && data.user) {
        setUser({
          ...data.user,
          token: data.token,
        });
        setItem("auth-token", data.token);
        return;
      }
      return toast.error("Ocorreu um erro ao fazer login");
    },
    onError: (error) => {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error("Ocorreu um erro ao fazer login");
    },
  });

  const sendOtpLoginEmail = async (
    email: string,
    isEmailForm: boolean = false,
  ) => {
    if (otpTimer === 0) {
      if (isEmailForm) {
        setIsAbleToGoToOtp(true);
      }
      sendOtpMutate({ email });
      return;
    }

    return toast.error("Aguarde 60 segundos para reenviar o código de login");
  };

  const loginWithOtpCode = async (email: string, code: string) => {
    mutate({ email, code });
  };

  useEffect(() => {
    if (isOtpForm && otpTimer > 0) {
      const interval = setInterval(() => {
        setOtpTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isOtpForm, otpTimer]);

  return {
    isOtpSended,
    otpTimer,
    isLoadingLogin: isPending,
    isLoadingSendOtp: sendOtpIsPending,
    sendOtpLoginEmail,
    loginWithOtpCode,
  };
};

export { useOtpLogin };
