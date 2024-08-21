import { TableLink } from "@/shared/ui/tables";
import { FC, ReactNode } from "react";
import { TableSeparator } from "@/shared/ui/tables";
import { cn } from "@/shared/utils";

interface Props {
  headLabels: string[];
  rows: Array<string | Array<string | ReactNode>>;
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
                  "text-start p-3 font-medium text-black/50",
                  index === 0 && "pl-7",
                )}
              >
                {label}
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
            />
          );
        })}
      </tbody>
    </table>
  );
};
