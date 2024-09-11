import { z } from "zod";

export const addProductSchema = z.object({
    name: z.string().min(1, {
        message: "Name product is required",
    }),
    description : z.string().min(1, {
        message: "Description product is required",
    }), 
    price : z.string().min(1, {
        message: "Price product is required",
    }), 

});
  