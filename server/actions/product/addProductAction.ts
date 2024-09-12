'use server'

import db from "@/db";
import { addProductSchema } from "@/helpers/validation/addProductValidation";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function addProductAction(prevState: any, data: FormData) {
    try {
        // Convert FormData to a plain object
        const formData = Object.fromEntries(data);
        console.log('Form Data:', formData);
     
        // Validate fields with Zod schema
        const validatedFields = addProductSchema.safeParse(formData);
       
        if (!validatedFields.success) {
            console.log(validatedFields.error.flatten().fieldErrors);
            return {
                errors: validatedFields.error.flatten().fieldErrors,
            }
        }
        // Assuming `db` is your Prisma client instance
        // Save the product to the database
        await db.product.create({
            data: {
                name: validatedFields.data.name,
                description: validatedFields.data.description,
                price: Number(validatedFields.data.price),
                image: validatedFields.data.imageUrl, // Save the image URL
            }
        });

        // Optionally revalidate the path or handle post-creation logic
        revalidatePath('/dashboard/product');

        // Update the state to indicate success
        prevState.type = "success";
        return prevState;
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                throw new Error('There was a unique constraint error in the database')
            }
        }
        throw e
    }
}
