import axios from "../../../axios.service";
import { IApiResponse } from "@/constants/types";

export interface ISendResetPasswordEmailInput {
  email: string;
  type: "set" | "reset";
}

export type TSendResetPasswordEmailResponse = IApiResponse;

export const sendResetPasswordEmail = async ({
  email,
  type,
}: ISendResetPasswordEmailInput): Promise<TSendResetPasswordEmailResponse> => {
  const { data } = await axios.post<TSendResetPasswordEmailResponse>(
    "api/auth/send-reset-password",
    { email, type },
  );
  return data;
};
