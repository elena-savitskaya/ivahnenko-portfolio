import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Введіть ім'я"),
  email: z.email("Невірна електронна адреса"),
  phone: z
    .string()
    .min(10, "Введіть номер телефону")
    .regex(/^[\d+ ()-]+$/, "Некоректний формат номера телефону"),
  message: z.string().nonempty("Введіть повідомлення"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
