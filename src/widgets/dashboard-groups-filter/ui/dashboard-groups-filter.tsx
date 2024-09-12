"use client";

import { Button, Input, Switch } from "@/shared/ui";
import { KeyboardEventHandler, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { CalendarDays, Plus, Search, X } from "lucide-react";

export const DashboardGroupsFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [unactive, setUnactive] = useState(
    searchParams.get("showNotActive") === "on" || false,
  );
  const [search, setSearch] = useState(searchParams.get("s") || "");

  const switchHandler = (checked: boolean) => {
    setUnactive(checked);
    if (checked) {
      const updatedSearchParams = new URLSearchParams(searchParams.toString());
      updatedSearchParams.set("showNotActive", "on");
      router.push(pathname + "?" + updatedSearchParams.toString());
    } else {
      const updatedSearchParams = new URLSearchParams(searchParams.toString());
      updatedSearchParams.delete("showNotActive");
      router.push(pathname + "?" + updatedSearchParams.toString());
    }
  };

  const searchHandler: KeyboardEventHandler = (event) => {
    if (event.keyCode !== 13) return;
    if (search) {
      const updatedSearchParams = new URLSearchParams(searchParams.toString());
      updatedSearchParams.set("s", search);
      router.push(pathname + "?" + updatedSearchParams.toString());
    } else {
      const updatedSearchParams = new URLSearchParams(searchParams.toString());
      updatedSearchParams.delete("s");
      router.push(pathname + "?" + updatedSearchParams.toString());
    }
  };

  return (
    <div className={"flex items-center gap-6"}>
      <div className={"flex items-center gap-2"}>
        <Switch
          className={""}
          checked={unactive}
          onCheckedChange={switchHandler}
        />
        <span className={"text-sm text-primary/50"}>
          не активные группы {unactive ? "показаны" : "скрыты"}
        </span>
      </div>
      <div className={"flex items-center gap-3"}>
        <Button asChild variant={"primary"}>
          <Link
            href={"/dashboard/groups/create"}
            className={"flex items-center gap-2 font-semibold pl-3"}
          >
            <Plus className={"w-5"} />
            <span>Добавить</span>
          </Link>
        </Button>
        <Button asChild variant={"primary"} size={"icon"}>
          <Link href={"/dashboard/groups/timetable/teachers"}>
            <CalendarDays />
          </Link>
        </Button>
        <div className={"relative text-primary/40 flex items-stretch gap-2"}>
          <Search
            className={
              "absolute w-5 top-1/2 -translate-y-1/2 -translate-x-1/2 left-6 "
            }
          />
          <Input
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            className={"pl-12 text-primary"}
            placeholder={"Поиск"}
            onKeyUp={searchHandler}
          />
          {searchParams.get("s") && (
            <Button
              className={"w-auto aspect-square"}
              variant={"outline"}
              size={"icon"}
              asChild
            >
              <a
                href={`/dashboard/groups${unactive ? `?showNotActive=on` : ""}`}
              >
                <X className={"w-5"} />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
