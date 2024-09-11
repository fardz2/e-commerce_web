import { z } from "zod";

export const registerSchema = z.object({
  
    email: z.string().email("This is not a valid email"),
    password: z.string().min(5, {
      message: "Password must be at least 5 characters",
    }),
    confirm: z.string().min(5, {
        message: "Confirm Password must be at least 5 characters",
      }),
  }).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
});
  