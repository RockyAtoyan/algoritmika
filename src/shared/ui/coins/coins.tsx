import { FC, ReactNode } from "react";
import { Coins as CoinsIcon } from "lucide-react";
import { cn } from "@/shared/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Coins: FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("flex items-center gap-1 text-xl font-bold mt-1")}>
      <span className={cn("text-2xl", className)}>{children}</span>
      <CoinsIcon />
    </div>
  );
};
