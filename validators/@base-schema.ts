import { z } from "zod";
import { passwordRegExp } from "./regex";

export const BaseSchema = z.object({
  email: z.email({ error: "Invalid email address" }),
  password: z.string().min(1, "Password is required"),
  passwordRegex: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(passwordRegExp, {
      error: "Invalid password format",
    }),
});
