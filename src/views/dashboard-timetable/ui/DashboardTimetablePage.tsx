import { NextPage } from "next";
import { Breadcrumbs } from "@/shared/ui";
import { TimetableFilter } from "@/widgets/timetable-filter";
import { Schedule } from "@/widgets/schedule";

interface Props {
  params: {
    type: string;
  };
}

export const DashboardTimetablePage: NextPage<Props> = ({ params }) => {
  return (
    <div>
      <Breadcrumbs
        lastElement={
          params.type === "teachers" ? "По педагогам" : "По кабинетам"
        }
      />
      <div className={"mt-5 max-w-sm"}>
        <TimetableFilter />
      </div>
      <div className={"mt-5 flex flex-col gap-8"}>
        <Schedule />
        <Schedule />
        <Schedule />
        <Schedule />
        <Schedule />
      </div>
    </div>
  );
};
