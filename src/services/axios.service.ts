import { ENVIRONMENT } from "@/constants/environment";
// import { useCookies } from '@/hooks/misc/useCookies'
import { useLocalStorage } from "@/hooks/misc/useLocalStorage";
import AxiosPrimitive from "axios";

const axios = AxiosPrimitive.create({
  baseURL: ENVIRONMENT.BASE_API_URL,
  withCredentials: false,
});

// Obtenha o cookie a partir de um interceptor
axios.interceptors.request.use(
  (config) => {
    const { getItem } = useLocalStorage();
    const token = getItem("auth-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axios;
