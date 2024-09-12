"use client";

import { Button, Input } from "@/shared/ui";
import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { KeyboardEventHandler, useState } from "react";

export const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("s") || "");

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
          className={"w-auto aspect-square cursor-pointer"}
          variant={"outline"}
          size={"icon"}
          asChild
        >
          <a
            onClick={(event) => {
              event.preventDefault();
              setSearch("");
              const updatedSearchParams = new URLSearchParams(
                searchParams.toString(),
              );
              updatedSearchParams.delete("s");
              router.push(pathname + "?" + updatedSearchParams.toString());
            }}
          >
            <X className={"w-5"} />
          </a>
        </Button>
      )}
    </div>
  );
};
