import { TableLink } from "@/shared/ui/tables";
import { FC, ReactNode } from "react";
import { TableSeparator } from "@/shared/ui/tables";
import { cn } from "@/shared/utils";
import { TableLinkItem } from "./table-link";

interface Props {
  headLabels: Array<string | { label: string; center: boolean }>;
  rows: Array<string | TableLinkItem[]>;
  separatorColspan?: number;
  clickHandler?: Function;
}

export const Table: FC<Props> = ({
  clickHandler,
  headLabels,
  rows,
  separatorColspan,
}) => {
  return (
    <table className="w-full text-nowrap text-[0.9375rem]">
      <thead>
        <tr className={"border-t uppercase text-sm"}>
          {headLabels.map((label, index) => {
            return (
              <th
                key={index}
                className={cn(
                  "text-start p-3 font-medium text-primary/50 border-b",
                  index === 0 && "pl-7",
                  label["center"] && "text-center",
                )}
              >
                {label["label"] || label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          if (typeof row === "string")
            return (
              <TableSeparator
                key={index}
                value={row}
                colspan={separatorColspan}
              />
            );
          return (
            <TableLink
              key={index}
              values={row}
              clickHandler={clickHandler}
              last={index === row.length - 1}
              first={index === 0}
            />
          );
        })}
      </tbody>
    </table>
  );
};
