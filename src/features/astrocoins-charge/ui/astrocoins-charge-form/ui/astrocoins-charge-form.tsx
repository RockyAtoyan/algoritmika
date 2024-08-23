"use client";

import { FC, useState } from "react";
import { Button, Coins, Input } from "@/shared/ui";

interface Props {}

export const AstrocoinsChargeForm: FC<Props> = () => {
  const [quantity, setQuantity] = useState("");
  const [reason, setReason] = useState("");

  return (
    <div className={"bg-white rounded border"}>
      <div className={"p-8 px-8 pb-10"}>
        <span className={"font-bold uppercase"}>Астрокоины</span>
        <div className={"font-bold mt-1"}>
          <Coins>60</Coins>
        </div>
        <div className={"mt-4 flex items-center gap-5"}>
          <label className={"w-1/3 flex flex-col gap-1"}>
            <div className={"text-sm"}>
              Кол-во
              <span className={"text-red-500 ml-1"}>*</span>
            </div>
            <Input
              value={quantity}
              onChange={(event) => {
                if (isNaN(+event.currentTarget.value)) return;
                setQuantity(event.currentTarget.value);
              }}
              placeholder={"Коины"}
            />
          </label>
          <label className={"w-2/3 flex flex-col gap-1"}>
            <div className={"text-sm"}>
              Основание
              <span className={"text-red-500 ml-1"}>*</span>
            </div>
            <Input
              value={reason}
              onChange={(event) => setReason(event.currentTarget.value)}
              placeholder={"Причина"}
            />
          </label>
        </div>
      </div>

      <div className={"flex items-center justify-end gap-1 border-t p-3 px-8"}>
        <Button
          variant={"primary"}
          size={"sm"}
          className={"bg-red-500 hover:bg-red-700 border-0"}
        >
          Списать
        </Button>
        <Button
          variant={"primary"}
          size={"sm"}
          className={"bg-green-500 hover:bg-green-700 border-0"}
        >
          Зачислить
        </Button>
      </div>
    </div>
  );
};
