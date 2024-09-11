"use client";

import { useToast } from "@/hooks/use-toast";
import { logout } from "@/server/actions/auth/logout";
import { useRef } from "react";

export default function FormLogout() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async () => {
        await logout();
        toast({
          description: "You have been signed out.",
          variant: "destructive",
        });
      }}
    >
      <input type="submit" value={"logout"} />
    </form>
  );
}
