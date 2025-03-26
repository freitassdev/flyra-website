import { EUserRole } from "@/models/role";
import { IUserModel } from "@/models/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserState = {
  user: IUserModel;
};

export type UserActions = {
  setUser: (user: IUserModel) => void;
  resetUser: () => void;
};

export type UserStore = UserState & UserActions;
const baseUser: IUserModel = {
  id: "",
  isVerified: false,
  role: EUserRole.ORG_OBSERVER,
  organizationId: "",
  email: "",
  name: "",
  token: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const baseUserStore = {
  user: baseUser,
};

export const userStore = create<UserStore>()(
  persist(
    (set) => ({
      ...baseUserStore,
      setUser: (user: IUserModel) => {
        return set((state) => ({
          user: {
            ...state.user,
            ...user,
          },
        }));
      },
      resetUser: () =>
        set(() => ({
          user: baseUser,
        })),
    }),
    {
      name: "user-store",
      partialize: (state) => ({
        user: state.user,
      }), // escolhe quais estados serão persistidos la nu local storagi
    },
  ),
);
