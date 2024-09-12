import db from "@/db"

interface Product{
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}
export  async function getProduct() :Promise<Product[]> {
    // Fetch product data from an API
    const response = await db.product.findMany();
    return response;
}
export async function deleteProduct(id: string) {
    const response = await db.product.delete({
        where: {
            id: id,
        },
    });
    return response;
}