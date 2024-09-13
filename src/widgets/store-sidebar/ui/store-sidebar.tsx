"use client";

import { FC } from "react";
import Link from "next/link";
import { cn } from "@/shared/utils";
import { useSearchParams } from "next/navigation";

interface Props {}

const links = [
  { label: "Все категории", href: "/store" },
  { label: "Канцелярия", href: "/store?category=10" },
  { label: "Полезные мелочи", href: "/store?category=11" },
  { label: "Одежда", href: "/store?category=12" },
  { label: "Техника", href: "/store?category=13" },
  { label: "Игры", href: "/store?category=14" },
  { label: "Игрушки", href: "/store?category=15" },
  { label: "Сумки", href: "/store?category=16" },
  { label: "Бутылки и кружки", href: "/store?category=17" },
  { label: "Брелоки, значки и магниты", href: "/store?category=18" },
  { label: "Прочее", href: "/store?category=19" },
  { label: "Украшения", href: "/store?category=20" },
  { label: "Литература", href: "/store?category=21" },
];

export const StoreSidebar: FC<Props> = () => {
  const searchParams = useSearchParams();

  return (
    <div className={"flex flex-col"}>
      {links.map((link) => {
        const activeClass = cn(
          "bg-main/5 dark:bg-main/20 font-bold text-main dark:text-main",
        );
        let itemClass;
        const category = searchParams.get("category");
        if (category)
          itemClass = cn(link.href.includes(category) && activeClass);
        else {
          itemClass = cn(!link.href.includes("category") && activeClass);
        }
        return (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "px-4 py-3 transition text-gray-700 dark:text-gray-500 rounded",
              itemClass,
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};
