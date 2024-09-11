import { Button } from "@/components/ui/button";
import getProduct from "@/service/product/get-product";
import Link from "next/link";
import { Suspense } from "react";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

export default async function Page() {
  const product = await getProduct();
  console.log(product);
  return (
    <>
      <Link href={"/dashboard/product/add-product"}>
        <Button>Add Product</Button>
      </Link>
      <Suspense fallback={<p>Loading feed...</p>}>
        <DataTable columns={columns} data={product} />
      </Suspense>
    </>
  );
}
