"use client";

import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { X } from "lucide-react";

export const Filter = () => {
  const searchParams = useSearchParams();

  const [name, setName] = useState(searchParams.get("filterFio") || "");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(searchParams.get("filterGroup") || "");

  return (
    <div className={"flex items-end gap-10"}>
      <label className={"w-1/4"}>
        <span className={"block mb-2"}>ФИО Ученика</span>
        <Input
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder={"Фамилия, Имя, Отчество"}
        />
      </label>
      <div className="w-1/4">
        <span className={"block mb-2"}>Выберите группу</span>
        <Select
          open={open}
          value={value}
          onValueChange={(v) => {
            setValue(v);
          }}
          onOpenChange={(value) => {
            setOpen(value);
          }}
        >
          <SelectTrigger className={"w-full"}>
            <SelectValue placeholder="Группа" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Группы</SelectLabel>
              <SelectItem value="1">ПС, ВС 19-15, ЖБИ 2023-2024</SelectItem>
              <SelectItem value="2">
                Юнити, СБ 14-00, ЖБИ 2023-2024, ПС, ВС 19-15, ЖБИ 2023-2024
              </SelectItem>
              <SelectItem value="3">
                PS ср 19:00 23/24 Уральская, Юнити чт 16:15 23/24 Уральская
              </SelectItem>
              <SelectItem value="4">
                PS ср 19:00 23/24 Уральская, Юнити чт 16:15 23/24 Уральская
              </SelectItem>
              <SelectItem value="5">
                PS ср 19:00 23/24 Уральская, Юнити чт 16:15 23/24 Уральская
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className={"flex items-center gap-3"}>
        <Button asChild>
          <a
            href={`/dashboard?filterFio=${name}&filterGroup=${value}`}
            onClick={(event) => {
              if (!name && !value) {
                event.preventDefault();
                return;
              }
            }}
          >
            Применить фильтр
          </a>
        </Button>
        {(!!searchParams.get("filterFio") ||
          !!searchParams.get("filterGroup")) && (
          <Button size={"icon"} asChild variant={"secondary"}>
            <a
              href={"/dashboard"}
              onClick={(event) => {
                setOpen(false);
                setValue("");
                setName("");
              }}
            >
              <X className={"w-4"} />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};
