"use client";

import Link from "next/link";

import styles from "./dashboard-menu.module.scss";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/utils";

export const DashboardMenu = () => {
  const pathname = usePathname();

  return (
    <div className={cn(styles.main)}>
      <Link
        className={cn(
          styles.item,
          pathname.includes("dashboard/groups") && styles.active,
        )}
        href={"/dashboard/groups"}
      >
        Группы
      </Link>
      <Link
        className={cn(styles.item, pathname === "/dashboard" && styles.active)}
        href={"/dashboard"}
      >
        Пользователи
      </Link>
      <Link
        className={cn(
          styles.item,
          pathname.includes("dashboard/store") && styles.active,
        )}
        href={"/dashboard/store"}
      >
        Магазин
      </Link>
      <Link
        className={cn(
          styles.item,
          pathname.includes("dashboard/tickets") && styles.active,
        )}
        href={"/dashboard/tickets"}
      >
        Заявки
      </Link>
    </div>
  );
};
