import {
  ILoginResponse,
  ILoginInput,
  login,
} from "@/services/queries/login/login-with-password.query";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useUserStore } from "@/hooks/stores/userUserStore";
import { useLocalStorage } from "@/hooks/misc/useLocalStorage";
import {
  ISendResetPasswordEmailInput,
  sendResetPasswordEmail,
  TSendResetPasswordEmailResponse,
} from "@/services/queries/login/send-reset-password.query";

const usePasswordLogin = () => {
  const { setItem } = useLocalStorage();
  const { setUser } = useUserStore((store) => store);
  const { mutate, isPending } = useMutation<
    ILoginResponse,
    AxiosError<ILoginResponse>,
    ILoginInput
  >({
    mutationKey: ["login-with-password"],
    mutationFn: login,
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

  const { mutate: resetPasswordMutate, isPending: isLoadingResetPassword } =
    useMutation<
      TSendResetPasswordEmailResponse,
      AxiosError<TSendResetPasswordEmailResponse>,
      ISendResetPasswordEmailInput
    >({
      mutationKey: ["reset-password"],
      mutationFn: sendResetPasswordEmail,
      onSuccess: (data) => {
        if (data.error) {
          toast.error(data.message);
          return;
        }
        if (!data.success) {
          toast.error("Falha ao enviar e-mail de recuperação de senha");
          return;
        }
        return toast.success(
          "E-mail de recuperação de senha enviado com sucesso! Verifique sua caixa de entrada",
        );
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
        toast.error(
          "Ocorreu um erro ao enviar seu e-mail de recuperação de senha",
        );
      },
    });

  const loginWithPassword = async (email: string, password: string) => {
    mutate({ email, password });
  };

  const resetPassword = async (email: string) => {
    resetPasswordMutate({ email });
  };
  return {
    isLoadingLogin: isPending,
    isLoadingResetPassword,
    loginWithEmail: loginWithPassword,
    resetPassword,
  };
};

export { usePasswordLogin };
