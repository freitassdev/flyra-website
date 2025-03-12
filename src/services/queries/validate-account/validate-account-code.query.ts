import axios from "../../axios.service";
import { IApiResponse } from "@/constants/types";

export interface IValidateAccountCode {
  code: string;
  newPassword: string;
}

export interface IValidateAccountCodeInput {
  code: string;
  newPassword: string;
  confirmNewPassword: string;
}

export type TValidateAccountCode = IApiResponse;

export const validateAccountCode = async ({
  code,
  newPassword,
}: IValidateAccountCode): Promise<TValidateAccountCode> => {
  const { data } = await axios.post<TValidateAccountCode>(
    "/auth/validateAccountCode",
    { code, newPassword },
  );
  return data;
};
