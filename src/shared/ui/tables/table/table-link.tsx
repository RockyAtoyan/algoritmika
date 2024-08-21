"use client";

import { FC, ReactNode } from "react";
import { clsx } from "clsx";
import { cn } from "@/shared/utils";

interface Props {
  values: Array<string | ReactNode>;
  clickHandler?: Function;
  last?: boolean;
}

export const TableLink: FC<Props> = ({ last, clickHandler, values }) => {
  return (
    <tr
      onClick={clickHandler}
      className={clsx(
        "border-y cursor-pointer transition-all hover:bg-gray-100",
        !!last && "border-b-0",
      )}
    >
      {values.map((value, index) => {
        return (
          <td key={index} className={cn("p-3", index === 0 && "pl-7")}>
            {value}
          </td>
        );
      })}
    </tr>
  );
};
