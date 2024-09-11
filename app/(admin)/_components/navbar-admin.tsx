import Link from "next/link";

export default function NavbarAdmin() {
  return (
    <nav>
      <Link href={"/dashboard"}>Home</Link>
      <Link href={"/dashboard/product"}>Product</Link>
    </nav>
  );
}
