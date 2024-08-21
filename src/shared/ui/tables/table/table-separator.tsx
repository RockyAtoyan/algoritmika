"use client";

import { FC, ReactNode } from "react";
import { clsx } from "clsx";

interface Props {
  value: string;
  colspan?: number;
  clickHandler?: Function;
}

export const TableSeparator: FC<Props> = ({ value, clickHandler, colspan }) => {
  return (
    <tr
      onClick={clickHandler}
      className={clsx("cursor-pointer bg-[var(--light)] text-white")}
    >
      <td colSpan={colspan} className={"py-3 pl-7 text-nowrap"}>
        {value}
      </td>
    </tr>
  );
};
