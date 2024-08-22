import {
  Breadcrumbs,
  Button,
  Pagination,
  SearchInput,
  Title,
} from "@/shared/ui";
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
      <div className={"mt-8 flex items-center gap-5 justify-between"}>
        <Title>Заказы</Title>
        <div className={"flex items-center gap-3"}>
          <Button variant={"primary"}>Выдать отмеченные</Button>
          <SearchInput />
        </div>
      </div>
      <div className={"mt-5"}>
        <OrdersTable />
      </div>
      <div className={"mt-5 flex justify-center"}>
        <Pagination currentPage={+searchParams.page || 1} totalCount={70} />
      </div>
    </div>
  );
};
