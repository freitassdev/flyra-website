import { ILoginResponse } from "@/services/queries/login/login-with-password.query";
import axios from "../../axios.service";

export interface ILoginWithOtpInput {
  email: string;
  code: string;
}

export type TLoginWithOtpResponse = ILoginResponse;

export const loginWithOtp = async ({
  email,
  code,
}: ILoginWithOtpInput): Promise<TLoginWithOtpResponse> => {
  const { data } = await axios.post<TLoginWithOtpResponse>(
    "/auth/validateLoginCode",
    {
      email,
      code,
    },
  );
  return data;
};
