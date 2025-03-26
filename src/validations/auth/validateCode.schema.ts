import { z } from "zod";

export const ValidateCodeLoginSchema = z.object({
  email: z
    .string({
      message: "O email é obrigatório.",
    })
    .email({
      message: "O email deve ser válido.",
    })
    .max(255, { message: "O email deve ter no máximo 255 caracteres." }),
  code: z
    .string({ message: "Código inválido." })
    .length(6, { message: "Seu código deve ter exatamente 6 caracteres." })
    .regex(/^\d{6}$/, { message: "O código deve conter apenas números." }),
});

export type TValidateCodeLogin = z.infer<typeof ValidateCodeLoginSchema>;
