'use server'


import { signIn } from "@/auth";
import { loginSchema } from "@/helpers/validation/loginValidation";
import { AuthError } from "next-auth";


export async function loginAction(prevState: any,data: FormData) {
 
    try {
        const formData = Object.fromEntries(data);
        const validatedFields = loginSchema.safeParse(formData);
        
        if (!validatedFields.success) {
          return {
            errors: validatedFields.error.flatten().fieldErrors,
          }
        }
        await signIn("credentials", {redirect:false, email: validatedFields.data.email, password: validatedFields.data.password});
        prevState.type = "success"
        return prevState;
      } catch (e) {
        if (e instanceof AuthError) {
          if(e.cause?.err?.message === "You have to create an account first."){
            prevState.type = "error";
          }else if(e.cause?.err?.message === "Incorrect password."){
            prevState.type = "incorrect";
          }
        }
        return prevState;
      }

}