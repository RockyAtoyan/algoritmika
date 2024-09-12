import { FC } from "react";
import { Coins } from "@/shared/ui";

interface Props {
  balance: number;
}

export const ProfileBalance: FC<Props> = ({ balance }) => {
  return (
    <div className={"bg-background py-3 px-6 rounded border flex flex-col"}>
      <h3 className={"text-primary/50"}>Ваш баланс</h3>
      <Coins className={"text-4xl"}>{balance}</Coins>
    </div>
  );
};
