import { FC } from "react";
import { Badge, Coins } from "@/shared/ui";
import { UserCard } from "@/entities/User";
import { OrderStatusForm } from "@/features/order-status";
import { cn } from "@/shared/utils";

interface Props {}

export const OrderInfo: FC<Props> = () => {
  return (
    <div>
      <div className={"flex items-center gap-5 text-2xl"}>
        <span>ЗАКАЗ #697</span>
        <Badge
          className={cn("text-lg", false && "bg-green-500 hover:bg-green-600")}
        >
          Оформлен
        </Badge>
      </div>
      <div className={"mt-5 rounded border bg-background pb-4"}>
        <div className={"p-4 px-6 border-b"}>
          <h3 className={"text-lg"}>Данные заказа</h3>
        </div>
        <div className={"px-6 py-8 flex flex-col gap-5"}>
          <div className={"flex flex-col gap-2"}>
            <span className={"text-[14px] font-bold"}>Товар</span>
            <span>Стикерпак "Котики"</span>
          </div>
          <div className={"flex flex-col gap-2"}>
            <span className={"text-[14px] font-bold"}>Пользователь</span>
            <UserCard />
          </div>
          <div className={"flex flex-col gap-2"}>
            <span className={"text-[14px] font-bold"}>Дата заказа</span>
            <span>30 апреля 2024 07:54</span>
          </div>
          <div className={"flex flex-col gap-2"}>
            <div className={"text-[14px] "}>
              Статус <span className={"text-red-500 ml-1"}>*</span>
            </div>
            <OrderStatusForm />
          </div>
          <div className={"flex flex-col"}>
            <span className={"text-[14px] font-bold uppercase"}>
              сумма заказа
            </span>
            <Coins>150</Coins>
          </div>
        </div>
      </div>
    </div>
  );
};
