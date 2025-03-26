import { z } from "zod";

export const ResetPasswordSchema = z
  .object({
    newPassword: z
      .string({ message: "A senha é obrigatória." })
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres." })
      .max(99, { message: "A senha deve ter no máximo 100 caracteres." }),
    confirmNewPassword: z.string({
      message: "A confirmação de senha é obrigatória.",
    }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Os campos de senha e confirmação devem ser congruentes.",
    path: ["confirmNewPassword"],
  });

export type TResetPassword = z.infer<typeof ResetPasswordSchema>;
