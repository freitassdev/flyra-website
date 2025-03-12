import axios from "../../../axios.service";
import { IApiResponse } from "@/constants/types";

export interface ISendValidateAccountCodeInput {
  email: string;
}

export type TSendValidateAccountCodeResponse = IApiResponse;

export const sendValidateAccountCode = async ({
  email,
}: ISendValidateAccountCodeInput): Promise<TSendValidateAccountCodeResponse> => {
  const { data } = await axios.post<TSendValidateAccountCodeResponse>(
    "/auth/sendValidateAccountCode",
    { email },
  );
  return data;
};
