"use client";

import { useState } from "react";
import { Button, DatePicker, InputWithIcon } from "@/shared/ui";
import { Phone, User } from "lucide-react";

export const UserInfoForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState<Date>();
  const [phone, setPhone] = useState("");

  return (
    <div className={"bg-white rounded border"}>
      <div className={"border-b p-3 px-8 text-lg"}>Общие данные</div>
      <div className={"p-5 px-8 flex flex-col gap-4"}>
        <label className={"flex flex-col gap-2"}>
          <div className={"text-sm"}>
            Фамилия, Имя, Отчество
            <span className={"ml-1 text-red-500"}>*</span>
          </div>
          <InputWithIcon
            value={name}
            onChange={(event) => {
              setName(event.currentTarget.value);
            }}
            placeholder={"ФИО"}
            Icon={User}
          />
        </label>
        <label className={"flex flex-col gap-2"}>
          <div className={"text-sm"}>
            Дата рождения
            <span className={"text-red-500 ml-1"}>*</span>
          </div>
          <DatePicker date={date} setDate={setDate} className={"w-full"} />
        </label>
        <label className={"flex flex-col gap-2"}>
          <div className={"text-sm"}>Телефон</div>
          <InputWithIcon
            value={phone}
            onChange={(event) => {
              setPhone(event.currentTarget.value);
            }}
            Icon={Phone}
            placeholder={"Номер телефона"}
          />
        </label>
      </div>
      <div className={"flex items-center justify-end gap-1 border-t p-3 px-8"}>
        <Button variant={"primary"} size={"sm"}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};
