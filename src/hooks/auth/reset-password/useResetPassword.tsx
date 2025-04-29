import { IApiResponse } from "@/constants/types";
import {
  IResetPassword,
  resetPassword,
} from "@/services/queries/auth/reset-password/reset-password.query";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useResetPassword = () => {
  const { isPending, mutate } = useMutation<
    IApiResponse,
    AxiosError<IApiResponse>,
    IResetPassword
  >({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      if (data.message) {
        toast.error(data.message);
        return;
      }
      if (data.statusCode !== 200 && data.statusCode !== 201) {
        toast.error("Falha ao redefinir sua senha");
        return;
      }

      toast.success(
        "Senha redefinida com sucesso! Faça login com sua nova senha",
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
        "Ocorreu um erro ao validar seu código de recuperação de senha",
      );
    },
  });

  const handleResetPassword = async ({
    code,
    password,
  }: {
    code: string;
    password: string;
  }) => {
    return new Promise<void>(() => {
      mutate({ code, password });
    });
  };

  return {
    handleResetPassword,
    isLoading: isPending,
  };
};

export default useResetPassword;
