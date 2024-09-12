import { NextPage } from "next";
import { AstrocoinsChargeForm } from "@/features/astrocoins-charge";
import { AuthCredentialsForm } from "@/features/auth-credentials";
import { UserInfoForm } from "@/features/user-info";
import { StudentCoinsLog } from "@/widgets/student-coins-log";
import { StudentChangesLog } from "@/widgets/student-changes-log";
import { Badge, Breadcrumbs } from "@/shared/ui";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export const DashboardUserStudent: NextPage<Props> = ({ params }) => {
  return (
    <div>
      <Breadcrumbs lastElement={"Ударцев Максим"} />
      <div className={"mt-8 mb-8"}>
        <h1 className={"text-3xl"}>Ударцев Максим</h1>
        <Link
          href={"/dashboard/users/1"}
          className={
            "text-primary/50 block w-max mt-2 text-lg transition hover:text-primary/80"
          }
        >
          Родитель: Ударцева Галина
        </Link>
        <span className={"block mt-5 text-lg font-semibold"}>Группы</span>
        <div className={"mt-3 flex items-center gap-5 flex-wrap"}>
          <Badge className={"text-base"}>Юнити</Badge>
          <Badge className={"text-base"}>СБ 14-00</Badge>
          <Badge className={"text-base"}>ЖБИ 2023-2024</Badge>
          <Badge className={"text-base"}>ПС</Badge>
          <Badge className={"text-base"}>ВС 19-15</Badge>
          <Badge className={"text-base"}>ЖБИ 2023-2024</Badge>
        </div>
      </div>
      <div className={"flex gap-5"}>
        <div className={"w-1/3 flex flex-col gap-5"}>
          <AstrocoinsChargeForm />
          <AuthCredentialsForm />
          <UserInfoForm />
        </div>
        <div className={"w-2/3 flex flex-col gap-6"}>
          <StudentCoinsLog />
          <StudentChangesLog />
        </div>
      </div>
    </div>
  );
};
