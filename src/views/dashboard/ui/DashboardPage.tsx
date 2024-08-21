import { Breadcrumbs, FeedBackButton, Title } from "@/shared/ui";
import { BirthdayTable } from "@/widgets/birthday-table";
import { AstrocoinsChargeTable } from "@/widgets/astrocoins-charge-table";

export const DashboardPage = () => {
  return (
    <div>
      <Breadcrumbs />
      <div className={"mb-6"}>
        <Title>Задачи</Title>
      </div>
      <FeedBackButton />
      <div className={"mt-7"}>
        <BirthdayTable />
      </div>
      <div className={"mt-7 mb-4"}>
        <AstrocoinsChargeTable />
      </div>
    </div>
  );
};
