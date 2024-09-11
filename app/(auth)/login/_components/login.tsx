"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useRef } from "react";

import { PaperPlaneIcon } from "@radix-ui/react-icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/helpers/validation/loginValidation";
import { loginAction } from "@/server/actions/auth/login";
import { useFormState } from "react-dom";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
const initialState = {
  message: "",
};
export default function LoginForm() {
  const [state, formAction] = useFormState(loginAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  useEffect(() => {
    if (state.type === "success") {
      toast({
        description: "Your Login was successful",
      });
      router.push("/");
    } else if (state.type === "error") {
      toast({
        description: "You have to make account first",
        variant: "destructive",
      });
    } else if (state.type === "incorrect") {
      {
        toast({
          description: "Your password is incorrect",
          variant: "destructive",
        });
      }
    }
    console.log("state", state);
  }, [state, form, toast, router]);

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={(evt) => {
          evt.preventDefault();
          form.handleSubmit(() => {
            formAction(new FormData(formRef.current!));
          })(evt);
        }}
      >
        <div className="grid md:grid-cols-2 grid-rows-1 gap-4">
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Fullname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button
          type="submit"
          className="mt-10 font-bold flex items-center justify-between gap-2"
        >
          Login
          <PaperPlaneIcon className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}
