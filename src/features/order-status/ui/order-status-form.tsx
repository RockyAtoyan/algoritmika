"use client";

import { FC, useState } from "react";
import {
  Button,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";

interface Props {}

export const OrderStatusForm: FC<Props> = () => {
  const [value, setValue] = useState("");

  return (
    <div className={"flex items-stretch"}>
      <Select required value={value} onValueChange={setValue}>
        <SelectTrigger className={"w-full rounded-r-none"}>
          <SelectValue placeholder="Статус заказа" />
        </SelectTrigger>
        <SelectContent className={"max-h-[15rem]"}>
          <SelectGroup>
            <SelectItem value="1">Оформлен</SelectItem>
            <SelectItem value="2">Выдан</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button variant={"primary"} className={"rounded-l-none"}>
        Применить
      </Button>
    </div>
  );
};
