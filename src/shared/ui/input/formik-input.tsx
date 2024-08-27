"use client";

import { useField } from "formik";
import { Button, Input } from "@/shared/ui";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/shared/utils";

export const FormikInput = ({ Icon, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const [isPassword, setIsPassword] = useState(true);

  if (Icon) {
    return (
      <div className={"relative text-black/40 flex items-stretch gap-2"}>
        <Icon
          className={
            "absolute w-5 top-1/2 -translate-y-1/2 -translate-x-1/2 left-6 "
          }
        />
        <Input
          className={cn(
            "pl-12 text-black",
            props["type"] === "password" && "px-12",
          )}
          {...field}
          {...props}
          type={
            props["type"] === "password"
              ? isPassword
                ? "password"
                : "text"
              : props["type"]
          }
        />
        {props["type"] === "password" && (
          <Button
            type={"button"}
            className={
              "absolute top-1/2 -translate-y-1/2 translate-x-1/2 right-6"
            }
            size={"icon"}
            variant={"ghost"}
            onClick={() => setIsPassword((prev) => !prev)}
          >
            {isPassword ? (
              <Eye className={"w-4"} />
            ) : (
              <EyeOff className={"w-4"} />
            )}
          </Button>
        )}
      </div>
    );
  }
  if (props["type"] === "password") {
    <div className={"relative text-black/40 flex items-stretch gap-2"}>
      <Input
        className={cn("px-12 text-black")}
        {...field}
        {...props}
        type={isPassword ? "password" : "text"}
      />
      {props["type"] === "password" && (
        <Button
          type={"button"}
          className={
            "absolute top-1/2 -translate-y-1/2 translate-x-1/2 right-6"
          }
          size={"icon"}
          variant={"ghost"}
          onClick={() => setIsPassword((prev) => !prev)}
        >
          {isPassword ? (
            <Eye className={"w-4"} />
          ) : (
            <EyeOff className={"w-4"} />
          )}
        </Button>
      )}
    </div>;
  }
  return <Input {...field} {...props} />;
};
