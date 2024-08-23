"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/shared/utils";
import { Button, ButtonProps } from "@/shared/ui";
import { Calendar } from "@/shared/ui";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui";
import { FC } from "react";

interface Props extends ButtonProps {
  date?: Date;
  setDate: (
    value:
      | ((prevState: Date | undefined) => Date | undefined)
      | Date
      | undefined,
  ) => void;
}

export const DatePicker: FC<Props> = ({
  date,
  setDate,
  className,
  ...props
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] max-w-full justify-start text-left font-normal pl-0",
            !date && "text-muted-foreground",
            className,
          )}
          {...props}
        >
          <CalendarIcon className="text-black/40 ml-3 mr-4 w-5" />
          {date ? format(date, "dd.MM.yyyy") : <span>Выбрать дату</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
