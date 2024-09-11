"use client";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";

export default function ButtonRegister() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="mt-10 font-bold flex items-center justify-between gap-2"
      disabled={pending}
    >
      {pending ? "Registering..." : "Register"}

      <PaperPlaneIcon className="h-4 w-4" />
    </Button>
  );
}
