'use server'
import db from "@/db";
import { addProductSchema } from "@/helpers/validation/addProductValidation";


import { saltAndHashPassword } from "@/lib/password";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function addProductAction(prevState: any,data: FormData) {
    try {
        const formData = Object.fromEntries(data);
        const validatedFields = addProductSchema.safeParse(formData);
        
        if (!validatedFields.success) {
          return {
            errors: validatedFields.error.flatten().fieldErrors,
          }
        }
        await db.product.create({data: {
            name: validatedFields.data.name,
            description: validatedFields.data.description,
            price: Number(validatedFields.data.price),
            image: "https://via.placeholder.com/150",
        }});
        revalidatePath('/dashboard/product');
        prevState.type = "success";
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