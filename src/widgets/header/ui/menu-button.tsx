"use client";

import { Button } from "@/shared/ui";
import { Menu, X } from "lucide-react";
import styles from "@/widgets/dashboard-menu/ui/dashboard-menu.module.scss";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const MenuButton = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    const menu = document.querySelector(`.${styles.main}`) as HTMLElement;
    menu?.classList.toggle("active");
    if (menu?.style.maxHeight) {
      menu.style.maxHeight = "";
    } else {
      menu.style.maxHeight = menu.scrollHeight + "px";
    }
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const menu = document.querySelector(`.${styles.main}`) as HTMLElement;
    const handleClick = (event) => {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.main}`)) {
        if (open) {
          if (menu?.style.maxHeight) {
            menu.style.maxHeight = "";
          } else {
            menu.style.maxHeight = menu.scrollHeight + "px";
          }
        }
        open && setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!pathname.includes("dashboard")) return null;

  return (
    <Button
      onClick={clickHandler}
      size={"icon"}
      variant={"outline"}
      className={"flex justify-center lg:hidden"}
    >
      {!open ? <Menu /> : <X />}
    </Button>
  );
};
