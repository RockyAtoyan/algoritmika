import { OrderInfo } from "@/widgets/order-info";
import { Breadcrumbs } from "@/shared/ui";

export const DashboardStoreOrderPage = () => {
  return (
    <div>
      <Breadcrumbs lastElement={"Заказ #697"} />
      <div className={"mt-8 w-5/12"}>
        <OrderInfo />
      </div>
    </div>
  );
};
