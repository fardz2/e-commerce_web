"use client";

import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./button";

interface ImageUploadProps {
  onChange: (value: string) => void;
  onRemove: () => void;
  value: string[];
}
export default function ImageUpload({
  onChange,
  onRemove,
  value,
}: ImageUploadProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) return null;
  function onUpload(result: any) {
    const { secure_url } = result.info;
    onChange(secure_url as string);
  }

  return (
    <>
      <div>
        {value.map((image) => (
          <div
            key={image}
            className=" w-[100px] h-[100px] overflow-hidden rounded-md relative"
          >
            <Image fill className="object-cover" src={image} alt="uploaded" />
            <Button
              variant={"destructive"}
              onClick={() => onRemove()}
              className="absolute top-0 right-0"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
      <CldUploadWidget
        signatureEndpoint="/api/sign-cloudinary-params"
        onSuccess={onUpload}
      >
        {({ open }) => {
          function handleOnClick() {
            onChange("");
            open();
          }
          return <Button onClick={handleOnClick}>Upload an Image</Button>;
        }}
      </CldUploadWidget>
    </>
  );
}
