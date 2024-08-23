import React from "react";
import { Breadcrumbs } from "@/shared/ui";
import { NewsTable } from "@/widgets/news-table";

export const DashboardNewsfeedsPage = () => {
  return (
    <div>
      <Breadcrumbs />
      <NewsTable />
    </div>
  );
};
