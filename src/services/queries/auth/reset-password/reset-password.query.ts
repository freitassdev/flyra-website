import axios from "../../../axios.service";
import { IApiResponse } from "@/constants/types";

export interface IResetPassword {
  code: string;
  password: string;
}

export interface IResetPasswordInput {
  newPassword: string;
  confirmNewPassword: string;
}

export type TResetPasswordResponse = IApiResponse;

export const resetPassword = async ({
  code,
  password,
}: IResetPassword): Promise<TResetPasswordResponse> => {
  const { data } = await axios.post<TResetPasswordResponse>(
    "auth/reset-password",
    { code, password },
  );
  return data;
};
