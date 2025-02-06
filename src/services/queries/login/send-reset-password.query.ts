import axios from "../../axios.service";
import { IApiResponse } from "@/constants/types";

export interface ISendResetPasswordEmailInput {
  email: string;
}

export type TSendResetPasswordEmailResponse = IApiResponse;

export const sendResetPasswordEmail = async ({
  email,
}: ISendResetPasswordEmailInput): Promise<TSendResetPasswordEmailResponse> => {
  const { data } = await axios.post<TSendResetPasswordEmailResponse>(
    "/auth/sendResetPasswordCode",
    { email },
  );
  return data;
};
