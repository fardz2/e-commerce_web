"use client";
import { Input } from "@/components/ui/input";
import { SearchNormal } from "iconsax-react";
import { useState } from "react";
export default function Search() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}>
        <SearchNormal />
      </button>
      {open && (
        <div className="absolute top-[90px]  bg-white px-4 py-5 mx-auto inset-x-0">
          <Input type="text" placeholder="Search" className="rounded-[50px]" />
        </div>
      )}
    </>
  );
}
