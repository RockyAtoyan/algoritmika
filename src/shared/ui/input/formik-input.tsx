"use client";

import { useField } from "formik";
import { Input } from "@/shared/ui";

export const FormikInput = (props) => {
  const [field, meta, helpers] = useField(props);
  return <Input {...field} {...props} />;
};
