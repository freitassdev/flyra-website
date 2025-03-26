import { z } from "zod";

export const UserEmailLoginSchema = z.object({
  email: z
    .string({
      message: "O email é obrigatório.",
    })
    .email({
      message: "O email deve ser válido.",
    })
    .max(255, { message: "O email deve ter no máximo 255 caracteres." }),
  password: z
    .string({ message: "A senha é obrigatória." })
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres." })
    .max(99, { message: "A senha deve ter no máximo 100 caracteres." }),
});

export type TUserEmailLogin = z.infer<typeof UserEmailLoginSchema>;
