import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string({ required_error: "O nome é obrigatório." })
    .min(3, { message: "O nome deve ter no mínimo 3 caracteres." })
    .max(50, { message: "O nome deve ter no máximo 50 caracteres." }),
  email: z
    .string({ required_error: "O email é obrigatório." })
    .email({ message: "Email inválido." }),
  subject: z
    .string({ required_error: "O assunto é obrigatório." })
    .min(3, { message: "O assunto deve ter no mínimo 3 caracteres." })
    .max(100, { message: "O assunto deve ter no máximo 100 caracteres." }),
  message: z
    .string({ required_error: "A mensagem é obrigatória." })
    .min(10, { message: "A mensagem deve ter no mínimo 10 caracteres." })
    .max(5000, { message: "A mensagem deve ter no máximo 5000 caracteres." }),
});

export type TContactForm = z.infer<typeof ContactFormSchema>;
