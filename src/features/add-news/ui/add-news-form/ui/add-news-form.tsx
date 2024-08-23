"use client";

import { FC, useRef } from "react";
import {
  Button,
  FormikInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from "@/shared/ui";
import { Form, Formik, FormikHelpers } from "formik";
import { cn } from "@/shared/utils";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/widgets/editor"), { ssr: false });

interface Props {}

export const AddNewsForm: FC<Props> = () => {
  const editorRef = useRef(null);

  const handleSubmit = (values, {}: FormikHelpers<any>) => {
    const data = {
      ...values,
      content: editorRef?.current.getContent(),
    };
    console.log(data);
  };

  return (
    <div className={"bg-white border rounded"}>
      <div className={"border-b py-4 px-6"}>
        <h3 className={"text-lg"}>Общие данные</h3>
      </div>
      <Formik
        initialValues={{
          name: "",
          link: "",
          role: "all",
          isActive: false,
        }}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className={"flex flex-col gap-8 p-6"}>
              <label className={"flex flex-col gap-1"}>
                <div className={"text-sm"}>
                  Название
                  <span className={"text-red-500 ml-1"}>*</span>
                </div>
                <FormikInput required name={"name"} />
              </label>
              <div className={"flex flex-col gap-1"}>
                <div className={"text-sm"}>
                  Содержание
                  <span className={"text-red-500 ml-1"}>*</span>
                </div>
                <div className={"min-h-[400px] bg-secondary rounded"}>
                  <Editor editorRef={editorRef} />
                </div>
              </div>
              <label className={"flex flex-col gap-1"}>
                <div className={"text-sm"}>Отображать для роли</div>
                <Select
                  required
                  value={values["role"]}
                  onValueChange={(value) => setFieldValue("role", value)}
                >
                  <SelectTrigger className={"w-full"}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className={"max-h-[15rem]"}>
                    <SelectGroup>
                      <SelectItem value="all">Для всех</SelectItem>
                      <SelectItem value="2">Администратор</SelectItem>
                      <SelectItem value="3">Представитель</SelectItem>
                      <SelectItem value="4">Педагог</SelectItem>
                      <SelectItem value="5">Старший педагог</SelectItem>
                      <SelectItem value="6">Техподдержка</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </label>
              <label className={"flex items-center gap-3"}>
                <Switch
                  checked={values["isActive"]}
                  onCheckedChange={(value) => setFieldValue("isActive", value)}
                />
                <div
                  className={cn(
                    "text-sm text-black/40 transition",
                    values["isActive"] && "text-black",
                  )}
                >
                  Новость активна
                </div>
              </label>
            </div>

            <div
              className={
                "flex items-center justify-end gap-1 border-t p-4 px-6"
              }
            >
              <Button type={"submit"} variant={"primary"} size={"sm"}>
                Добавить
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
