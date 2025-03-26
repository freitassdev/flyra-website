import { createContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserStore } from "@/hooks/stores/userUserStore";
import { useLocalStorage } from "@/hooks/misc/useLocalStorage";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getItem } = useLocalStorage();
  const {
    user: { token, id },
  } = useUserStore((store) => store);

  useEffect(() => {
    const checkAuth = async () => {
      const authToken = await getItem("auth-token");
      const isAuthenticated = token && id && authToken === token;
      const isLoginPage = location.pathname === "/";

      if (isAuthenticated && isLoginPage) {
        // Se o usuário já está logado redireciona para /home
        navigate("/home", { replace: true });
      } else if (!isAuthenticated && !isLoginPage) {
        // Se o usuário não estiver logado redireciona para /login
        navigate("/", { replace: true });
      }
    };

    checkAuth();
  }, [token, id, getItem, location.pathname, navigate]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
