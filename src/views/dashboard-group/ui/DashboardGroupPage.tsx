import { Breadcrumbs, Title } from "@/shared/ui";
import { UsersTable } from "@/entities/User";
import { AddGroupForm } from "@/features/add-group";

export const DashboardGroupPage = () => {
  return (
    <div>
      <Breadcrumbs lastElement={"Юнити чт 14:30 23/24 Уральская"} />
      <div className={"mt-8"}>
        <Title>Группа Юнити чт 14:30 23/24 Уральская</Title>
      </div>
      <div className={"mt-5 bg-white border-t border-x"}>
        <div className={"py-4 px-7"}>
          <h3 className={"text-lg"}>Ученики</h3>
        </div>
        <UsersTable />
      </div>
      <div className={"mt-8 opacity-60 pointer-events-none"}>
        <AddGroupForm />
      </div>
    </div>
  );
};
