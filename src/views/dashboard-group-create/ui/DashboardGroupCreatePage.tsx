import { AddGroupForm } from "@/features/add-group";
import { Breadcrumbs, Title } from "@/shared/ui";

export const DashboardGroupCreatePage = () => {
  return (
    <div>
      <Breadcrumbs lastElement={"Создание группы"} />
      <div className={"mt-8"}>
        <Title>Добавление группы</Title>
      </div>
      <div className={"mt-5"}>
        <AddGroupForm />
      </div>
    </div>
  );
};
