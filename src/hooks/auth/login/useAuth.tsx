import {
  ILoginResponse,
  ILoginInput,
  login,
} from "@/services/queries/auth/login/login-with-password.query";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useUserStore } from "@/hooks/stores/userUserStore";
import { useLocalStorage } from "@/hooks/misc/useLocalStorage";
import { EUserRole } from "@/models/role";

export const useAuth = () => {
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
        if (data.user.role !== EUserRole.SYSTEM_ADMIN) {
          return toast.error(
            "Você não tem permissão para acessar essa aplicação.",
          );
        }
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

  const loginWithPassword = async (email: string, password: string) => {
    mutate({ email, password });
  };

  return {
    isLoadingLogin: isPending,
    loginWithEmail: loginWithPassword,
  };
};
