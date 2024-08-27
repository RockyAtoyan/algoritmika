"use client";

import { FC } from "react";
import { Button, FormikInput } from "@/shared/ui";
import { Form, Formik, FormikHelpers } from "formik";
import { User } from "lucide-react";

interface Props {}

export const EditProfileForm: FC<Props> = () => {
  const handleSubmit = (values, {}: FormikHelpers<any>) => {
    console.log(values);
  };

  return (
    <div className={"bg-white border rounded"}>
      <div className={"border-b py-4 px-6"}>
        <h3 className={"text-lg"}>Мой профиль</h3>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className={"flex flex-col gap-6 p-6"}>
              <label className={"flex flex-col gap-1"}>
                <div className={"text-sm"}>
                  Фамилия, Имя, Отчество
                  <span className={"text-red-500 ml-1"}>*</span>
                </div>
                <FormikInput required name={"name"} Icon={User} />
              </label>
              <div className={"flex items-center gap-8 justify-between"}>
                <label className={"w-1/2 flex flex-col gap-1"}>
                  <div className={"text-sm"}>Email</div>
                  <FormikInput type={"email"} name={"email"} />
                </label>
                <label className={"w-1/2 flex flex-col gap-1"}>
                  <div className={"text-sm"}>Телефон</div>
                  <FormikInput name={"phone"} />
                </label>
              </div>
            </div>

            <div
              className={
                "flex items-center justify-end gap-1 border-t p-4 px-6"
              }
            >
              <Button type={"submit"} variant={"primary"} size={"sm"}>
                Обновить профиль
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
