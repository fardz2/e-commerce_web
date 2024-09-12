"use server";

import { deleteProduct } from "@/service/product/product-service";
import { revalidatePath } from "next/cache";

export default async function deleteProductAction(id:string) {
    await deleteProduct(id);
    revalidatePath("/dashboard/product");
}