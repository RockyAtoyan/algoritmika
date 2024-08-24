"use client";

import { useField } from "formik";
import { Input } from "@/shared/ui";

export const FormikInput = (props) => {
  const [field, meta, helpers] = useField(props);
  if (props.Icon) {
    return (
      <div className={"relative text-black/40 flex items-stretch gap-2"}>
        <props.Icon
          className={
            "absolute w-5 top-1/2 -translate-y-1/2 -translate-x-1/2 left-6 "
          }
        />
        <Input className={"pl-12 text-black"} {...field} {...props} />
      </div>
    );
  }
  return <Input {...field} {...props} />;
};
