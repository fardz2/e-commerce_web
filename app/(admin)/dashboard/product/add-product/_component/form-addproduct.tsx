"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { addProductSchema } from "@/helpers/validation/addProductValidation";
import { addProductAction } from "@/server/actions/product/addProductAction";
import ImageUpload from "@/components/ui/image-upload";
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
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

export default function AddProductForm() {
  const [state, formAction] = useFormState(addProductAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof addProductSchema>>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      imageUrl: "",
    },
  });

  useEffect(() => {
    if (state.type === "success") {
      router.push("/dashboard/product");
      toast({
        description: "Your Product was successfully added",
      });
    }
  }, [state, toast, router]);

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={(evt) => {
          evt.preventDefault();
          form.handleSubmit(() => {
            // Creating FormData with the form's ref
            const formData = new FormData(formRef.current!);
            console.log("Form Data:", formRef.current!);
            // Add custom logic here if needed
            formAction(formData);
          })(evt);
        }}
      >
        <div className="grid md:grid-cols-2 grid-rows-1 gap-4">
          <div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input placeholder="Price" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  {/* Hidden input to hold the image URL */}
                  <FormLabel className="hidden">Image</FormLabel>

                  <FormControl>
                    <>
                      <ImageUpload
                        onChange={(url) => field.onChange(url)} // Update form field
                        onRemove={() => field.onChange("")} // Clear form field
                        value={field.value ? [field.value] : []}
                      />
                      <Input
                        placeholder="Image"
                        className="hidden"
                        {...field}
                      />
                    </>
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
          Add Product
        </Button>
      </form>
    </Form>
  );
}
