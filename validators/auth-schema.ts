import { z } from "zod";
import { BaseSchema } from "./@base-schema";

export const SigninSchema = BaseSchema.pick({
  email: true,
  password: true,
});

export const InitiateResetSchema = BaseSchema.pick({
  email: true,
});

export const verifyCodeSchema = z.object({
  code: z.string().min(6, "Code must be at least 6 characters"),
});

export const changePasswordSchema = z
  .object({
    newPassword: BaseSchema.shape.passwordRegex,
    confirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SigninInputs = z.infer<typeof SigninSchema>;
export type IniateResetInputs = z.infer<typeof InitiateResetSchema>;
export type VerifyCodeInputs = z.infer<typeof verifyCodeSchema>;
export type ChangePasswordInputs = z.infer<typeof changePasswordSchema>;
