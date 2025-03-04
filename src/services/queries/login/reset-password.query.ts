import axios from "../../axios.service";
import { IApiResponse } from "@/constants/types";

export interface IResetPassword {
  code: string;
  newPassword: string;
}

export interface IResetPasswordInput {
  code: string;
  newPassword: string;
  confirmNewPassword: string;
}

export type TResetPasswordResponse = IApiResponse;

export const resetPassword = async ({
  code,
  newPassword,
}: IResetPassword): Promise<TResetPasswordResponse> => {
  const { data } = await axios.post<TResetPasswordResponse>(
    "/auth/resetPassword",
    { code, newPassword },
  );
  return data;
};
