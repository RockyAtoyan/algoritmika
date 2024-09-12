import { Breadcrumbs, Pagination } from "@/shared/ui";
import { StoreSidebar } from "@/widgets/store-sidebar";
import { StoreCard } from "@/widgets/store-card";
import { NextPage } from "next";

interface Props {
  searchParams: {
    page?: number;
  };
}

export const StorePage: NextPage<Props> = ({ searchParams }) => {
  return (
    <div>
      <Breadcrumbs homeElement={"Главная"} />
      <div className={"bg-background border rounded mt-2"}>
        <h3 className={"text-lg p-3"}>Магазин</h3>
      </div>
      <div className={"flex gap-8 mt-5"}>
        <div className={"w-2/12"}>
          <StoreSidebar />
        </div>
        <div className={"w-10/12"}>
          <div className={"grid grid-cols-3 gap-10"}>
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
          </div>
          <div className={"mt-8 flex justify-center"}>
            <Pagination
              totalCount={135}
              currentPage={+searchParams.page || 1}
              pageSize={9}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
