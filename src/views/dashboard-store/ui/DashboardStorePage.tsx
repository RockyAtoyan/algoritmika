import { Breadcrumbs, Pagination } from "@/shared/ui";
import { OrdersTable } from "@/widgets/orders-table";
import { NextPage } from "next";

interface Props {
  searchParams: {
    page?: number;
  };
}

export const DashboardStorePage: NextPage<Props> = ({ searchParams }) => {
  return (
    <div>
      <Breadcrumbs />
      <OrdersTable />
      <div className={"mt-5 flex justify-center"}>
        <Pagination currentPage={+searchParams.page || 1} totalCount={70} />
      </div>
    </div>
  );
};
