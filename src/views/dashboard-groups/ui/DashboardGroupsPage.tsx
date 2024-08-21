import { Breadcrumbs, Title } from "@/shared/ui";
import { DashboardGroupsFilter } from "@/widgets/dashboard-groups-filter";
import { DashboardGroupsTable } from "@/widgets/dashboard-groups-table";

export const DashboardGroupsPage = () => {
  return (
    <div>
      <Breadcrumbs />
      <div className={"mt-8 flex items-center gap-5 justify-between"}>
        <Title>Группы</Title>
        <DashboardGroupsFilter />
      </div>
      <div className={"mt-5"}>
        <DashboardGroupsTable />
      </div>
    </div>
  );
};
