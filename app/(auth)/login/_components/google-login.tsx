"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { googleLogin } from "@/server/actions/auth/google-login";
import { useRef } from "react";

export default function GoogleLogin() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={async () => {
        try {
          await googleLogin();
          toast({
            description: "You have been signin.",
          });
        } catch (e) {}
      }}
    >
      <Button
        type="submit"
        className="mt-10 font-bold flex items-center justify-between gap-2"
      >
        Login Google
      </Button>
    </form>
  );
}
