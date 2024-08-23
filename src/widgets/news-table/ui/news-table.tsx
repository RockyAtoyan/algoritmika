import { Button, SearchInput, Title } from "@/shared/ui";
import { Table } from "@/shared/ui/tables";
import { Plus } from "lucide-react";
import Link from "next/link";

export const NewsTable = () => {
  return (
    <div className={"mt-8"}>
      <div className={"flex items-center gap-5 justify-between"}>
        <Title>Новости</Title>
        <div className={"flex items-center gap-3"}>
          <Button variant={"primary"} asChild>
            <Link
              className={"flex items-center gap-2 font-semibold pl-3"}
              href={"/dashboard/newsfeeds/create"}
            >
              <Plus className={"w-5"} />
              <span>Добавить</span>
            </Link>
          </Button>
          <SearchInput />
        </div>
      </div>
      <div className={"mt-5 bg-white rounded border-x"}>
        <Table
          headLabels={[
            "#",
            "Название",
            "Автор",
            "Дата",
            "Для роли",
            "Активность",
          ]}
          rows={[]}
        />
      </div>
    </div>
  );
};
