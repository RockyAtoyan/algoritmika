"use client";

import { FC, ReactNode } from "react";
import { clsx } from "clsx";
import { cn } from "@/shared/utils";

export type TableLinkItem =
  | string
  | ReactNode
  | { label: string | ReactNode; wrap: boolean; unclickable: boolean };

interface Props {
  values: TableLinkItem[];
  clickHandler?: Function;
  last?: boolean;
}

export const TableLink: FC<Props> = ({ last, clickHandler, values }) => {
  return (
    <tr
      className={clsx(
        "border-y cursor-pointer transition-all hover:bg-gray-100",
        !!last && "border-b-0",
      )}
    >
      {values.map((value, index) => {
        return (
          <td
            key={index}
            className={cn(
              "p-3",
              index === 0 && "pl-7",
              value["wrap"] && "text-wrap",
            )}
            onClick={!value["unclickable"] ? clickHandler : undefined}
          >
            {value["label"] || value}
          </td>
        );
      })}
    </tr>
  );
};
