import { IApiResponse } from "@/constants/types";
import {
  IResetPassword,
  resetPassword,
} from "@/services/queries/auth/reset-password/reset-password.query";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

const useResetPassword = () => {
  const { isPending, mutate } = useMutation<
    IApiResponse,
    AxiosError<IApiResponse>,
    IResetPassword
  >({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      if (data.error) {
        toast.error(data.message);
        return;
      }
      if (data.success) {
        toast.success(
          "Senha redefinida com sucesso! Faça login com sua nova senha",
        );
        return;
      }
      toast.error("Falha ao redefinir sua senha");
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
        "Ocorreu um erro ao validar seu código de recuperação de senha",
      );
    },
  });

  const handleResetPassword = async ({
    code,
    newPassword,
  }: {
    code: string;
    newPassword: string;
  }) => {
    return new Promise<void>(() => {
      mutate({ code, newPassword });
    });
  };

  return {
    handleResetPassword,
    isLoading: isPending,
  };
};

export default useResetPassword;
