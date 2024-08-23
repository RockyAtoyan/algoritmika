import React from "react";
import { Breadcrumbs } from "@/shared/ui";
import { TicketsTable } from "@/widgets/tickets-table";

export const DashboardTicketsPage = () => {
  return (
    <div>
      <Breadcrumbs />
      <TicketsTable />
    </div>
  );
};
