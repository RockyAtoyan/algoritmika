import { Breadcrumbs, Title } from "@/shared/ui";
import { AddNewsForm } from "@/features/add-news/ui/add-news-form/ui/add-news-form";

export const DashboardNewsCreatePage = () => {
  return (
    <div>
      <Breadcrumbs lastElement={"Добавление новости"} />
      <div className={"mt-8"}>
        <Title>Добавление новости</Title>
      </div>
      <div className={"mt-5"}>
        <AddNewsForm />
      </div>
    </div>
  );
};
