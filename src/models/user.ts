import { EUserRole } from "./role";

export interface IUserModel {
  id: string;
  isVerified: boolean;
  role: EUserRole;
  organizationId: string;
  email: string;
  name: string;
  token: string;
  createdAt: Date;
  updatedAt: Date;
}
