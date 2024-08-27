"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectGroup,
} from "@/shared/ui";

export const TimetableFilter = () => {
  const pathname = usePathname();

  const router = useRouter();

  return (
    <div>
      <Select
        required
        value={pathname.includes("teachers") ? "teachers" : "classes"}
        onValueChange={(value) => {
          router.push(`/dashboard/groups/timetable/${value}`);
        }}
      >
        <SelectTrigger className={"w-full"}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className={"max-h-[15rem]"}>
          <SelectGroup>
            <SelectItem value="teachers">По педагогам</SelectItem>
            <SelectItem value="classes">По кабинетам</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
