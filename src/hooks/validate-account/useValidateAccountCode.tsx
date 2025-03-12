import { IApiResponse } from "@/constants/types";
import {
  IValidateAccountCode,
  validateAccountCode,
} from "@/services/queries/validate-account/validate-account-code.query";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

const useValidateAccountCode = () => {
  const { isPending, mutate } = useMutation<
    IApiResponse,
    AxiosError<IApiResponse>,
    IValidateAccountCode
  >({
    mutationFn: validateAccountCode,
    onSuccess: (data) => {
      if (data.error) {
        toast.error(data.message);
        return;
      }
      if (data.success) {
        toast.success(
          "Sua conta foi validada com sucesso! Faça login com sua nova senha",
        );
        return;
      }
      toast.error("Falha ao validar sua conta");
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
        "Ocorreu um erro ao validar seu código de validação de conta",
      );
    },
  });

  const handleValidateAccount = async ({
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
    handleValidateAccount,
    isLoading: isPending,
  };
};

export default useValidateAccountCode;
