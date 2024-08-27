"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { Button, Checkbox, FormikInput } from "@/shared/ui";
import { AtSign, LockKeyhole } from "lucide-react";
import Link from "next/link";

interface Dto {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const AuthForm = () => {
  const submitHandler = (values: Dto, formikHelpers: FormikHelpers<Dto>) => {
    console.log(values);
  };

  return (
    <div className={"bg-white border rounded p-8"}>
      <div className={"mb-8"}>
        <h3 className={"text-xl font-semibold"}>Вход</h3>
      </div>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        onSubmit={submitHandler}
      >
        {({ values, setFieldValue }) => (
          <Form className={"flex flex-col gap-3"}>
            <div className={"flex flex-col gap-2"}>
              <span className={"text-sm"}>
                Email родителя или Логин ученика
              </span>
              <FormikInput
                required
                name={"email"}
                Icon={AtSign}
                placeholder={"Введите Email или Логин ученика"}
              />
            </div>
            <div className={"flex flex-col gap-2"}>
              <span className={"text-sm"}>Пароль</span>
              <FormikInput
                required
                name={"password"}
                Icon={LockKeyhole}
                placeholder={"Введите пароль"}
                type={"password"}
              />
            </div>
            <div className={"mt-2 flex items-center gap-3 justify-between"}>
              <label className={"flex items-center gap-2"}>
                <Checkbox
                  checked={values["rememberMe"]}
                  onCheckedChange={(checked) =>
                    setFieldValue("rememberMe", checked)
                  }
                />
                <span>Запомнить меня</span>
              </label>
              <Link
                href={"/password/reset"}
                className={"text-sm text-main hover:underline"}
              >
                Забыли пароль?
              </Link>
            </div>
            <Button
              className={"w-full mt-5"}
              variant={"primary"}
              type={"submit"}
            >
              Войти
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
