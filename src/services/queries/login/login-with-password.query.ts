import { IUserModel } from "@/models/user";
import axios from "../../axios.service";
import { IApiResponse } from "@/constants/types";

export interface ILoginInput {
  email: string;
  password: string;
}

export interface ILoginResponse extends IApiResponse {
  token?: string;
  user?: Omit<IUserModel, "token">;
}

export const login = async ({
  email,
  password,
}: ILoginInput): Promise<ILoginResponse> => {
  const { data } = await axios.post<ILoginResponse>("/auth/signIn", {
    email,
    password,
  });
  return data;
};
