import React from "react";
import { CardTitle } from "@/shared/ui";
import { UsersTable } from "@/entities/User";

export const BirthdayTable = () => {
  return (
    <div className={"bg-white rounded border"}>
      <div className={"py-3 pl-7"}>
        <CardTitle>Ближайшие дни рождения</CardTitle>
      </div>
      <UsersTable />
    </div>
  );
};
