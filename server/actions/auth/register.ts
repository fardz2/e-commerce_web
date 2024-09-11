'use server'
import db from "@/db";

import { registerSchema } from "@/helpers/validation/registerValidation";
import { saltAndHashPassword } from "@/lib/password";

import { Prisma } from "@prisma/client";

export async function registerAction(prevState: any,data: FormData) {
    try {
        const formData = Object.fromEntries(data);
        const validatedFields = registerSchema.safeParse(formData);
        
        if (!validatedFields.success) {
          return {
            errors: validatedFields.error.flatten().fieldErrors,
          }
        }
        const user = await db.user.findUnique({where: {email: validatedFields.data.email}});
        if (user) {
             prevState.type = "duplicate";
        }else{
            const hash = saltAndHashPassword(validatedFields.data.password);
            await db.user.create({
                data: {
                    email:  validatedFields.data.email,
                    password: hash,
                    role: "admin",
                },
            });
     
            prevState.type = "success";
        }
   
        return prevState;
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          // The .code property can be accessed in a type-safe manner
          if (e.code === 'P2002') {
            throw new Error('There was a unique constraint error in the database')
          }
        }
        throw e
      }

}