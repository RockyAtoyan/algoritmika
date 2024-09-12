"use client";

import { FC, useState } from "react";
import { Coins } from "lucide-react";
import { Button, Input } from "@/shared/ui";

interface Props {}

export const AuthCredentialsForm: FC<Props> = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={"bg-background rounded border"}>
      <div className={"p-6 px-8"}>
        <span className={"font-bold uppercase"}>АВТОРИЗАЦИЯ БО+ЛК</span>
        <div className={"mt-4 flex items-center justify-between gap-3"}>
          <label className={"w-1/2 flex flex-col gap-1"}>
            <div className={"text-sm"}>
              Логин
              <span className={"text-red-500 ml-1"}>*</span>
            </div>
            <Input
              value={login}
              onChange={(event) => {
                setLogin(event.currentTarget.value);
              }}
            />
          </label>
          <label className={"w-1/2 flex flex-col gap-1"}>
            <div className={"text-sm"}>
              Пароль
              <span className={"text-red-500 ml-1"}>*</span>
            </div>
            <Input
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </label>
        </div>
      </div>

      <div className={"flex items-center justify-end gap-1 border-t p-3 px-8"}>
        <Button variant={"primary"} size={"sm"}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};
