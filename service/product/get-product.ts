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
export default async function getProduct() :Promise<Product[]> {
    // Fetch product data from an API
    const response = await db.product.findMany();
    return response;
}