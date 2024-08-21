"use client";

import { Table } from "@/shared/ui/tables";
import { useRouter } from "next/navigation";
import { getAge } from "@/shared/utils";

export const UsersTable = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/");
  };

  return (
    <Table
      headLabels={["ID", "Ученик", "Дата рождения"]}
      rows={[
        ["3415", "Ударцев Максим", getAge(new Date("2004.08.28"))],
        ["3415", "Ударцев Максим", "28 августа, будет 15 лет."],
        ["3415", "Ударцев Максим", "28 августа, будет 15 лет."],
        ["3415", "Ударцев Максим", "28 августа, будет 15 лет."],
        ["3415", "Ударцев Максим", "28 августа, будет 15 лет."],
      ]}
      clickHandler={clickHandler}
    />
  );
};
