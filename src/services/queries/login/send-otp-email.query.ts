import axios from "../../axios.service";
import { IApiResponse } from "@/constants/types";

export interface ISendOtpInput {
  email: string;
}

export type TSendOtpResponse = IApiResponse;

export const sendOtpEmail = async ({
  email,
}: ISendOtpInput): Promise<TSendOtpResponse> => {
  const { data } = await axios.post<TSendOtpResponse>("/auth/sendLoginCode", {
    email,
  });
  return data;
};
