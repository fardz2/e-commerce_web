"use client";

import { useToast } from "@/hooks/use-toast";
import deleteProductAction from "@/server/actions/product/deleteProductAction";
import { useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
export default function FormDeleteProduct({ id }: { id: string }) {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <AlertDialog>
      <AlertDialogTrigger>Delete</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>
            <form
              ref={formRef}
              action={async () => {
                await deleteProductAction(id);
                toast({
                  description: "Deleted Product was successfully",
                  variant: "destructive",
                });
              }}
            >
              <input type="submit" value={"Delete"} />
            </form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
