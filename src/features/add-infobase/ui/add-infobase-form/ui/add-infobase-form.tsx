"use client";

import { FC } from "react";
import {
  Button,
  FormikInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";
import { Form, Formik, FormikHelpers } from "formik";

interface Props {}

export const AddInfobaseForm: FC<Props> = () => {
  const handleSubmit = (values, {}: FormikHelpers<any>) => {
    console.log(values);
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
              <label className={"flex flex-col gap-1"}>
                <div className={"text-sm"}>
                  Ссылка
                  <span className={"text-red-500 ml-1"}>*</span>
                </div>
                <FormikInput required name={"link"} />
              </label>
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
