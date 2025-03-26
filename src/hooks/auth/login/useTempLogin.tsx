import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useTempLogin = () => {
  const router = useRouter();

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<Response> => {
    const res = await fetch("/api/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res;
  };

  const { mutate, isPending } = useMutation<
    Response,
    Response,
    { email: string; password: string }
  >({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: (data) => {
      if (data.status !== 200) {
        return toast.error("Email ou senha incorretos.");
      }
      return router.push("/blog/admin/new-post");
    },
    onError: () => {
      toast.error("Ocorreu um erro ao fazer login");
    },
  });

  const tempLogin = (email: string, password: string) => {
    mutate({ email, password });
  };

  return {
    tempLogin,
    isLoadingLogin: isPending,
  };
};
