import React from "react";
import Link from "next/link";
import { MessageSquareText } from "lucide-react";

export const Button = () => {
  return (
    <Link
      className={
        "w-max bg-background p-3 border rounded flex items-center gap-3 font-semibold transition-all hover:bg-main hover:text-background hover:border-[var(--accent)]"
      }
      href={"/dashboard/tickets"}
    >
      <MessageSquareText />
      <span>Дать обратную связь</span>
    </Link>
  );
};
