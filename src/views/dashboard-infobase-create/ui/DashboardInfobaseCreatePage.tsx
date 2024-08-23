import { Breadcrumbs, Title } from "@/shared/ui";
import { AddInfobaseForm } from "@/features/add-infobase";

export const DashboardInfobaseCreatePage = () => {
  return (
    <div>
      <Breadcrumbs lastElement={"Добавление базы"} />
      <div className={"mt-8"}>
        <Title>Добавление базы</Title>
      </div>
      <div className={"mt-5"}>
        <AddInfobaseForm />
      </div>
    </div>
  );
};
