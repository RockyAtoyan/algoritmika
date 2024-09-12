import { Button, SearchInput, Title } from "@/shared/ui";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Table } from "@/shared/ui/tables";

export const InfobaseTable = () => {
  return (
    <div className={"mt-8"}>
      <div className={"flex items-center gap-5 justify-between"}>
        <Title>База знаний</Title>
        <div className={"flex items-center gap-3"}>
          <Button variant={"primary"} asChild>
            <Link
              className={"flex items-center gap-2 font-semibold pl-3"}
              href={"/dashboard/infobase/create"}
            >
              <Plus className={"w-5"} />
              <span>Добавить</span>
            </Link>
          </Button>
          <SearchInput />
        </div>
      </div>
      <div className={"mt-5 bg-background rounded border-x"}>
        <Table
          headLabels={["#", "Название", "Для роли", "Ссылка", "Создатель"]}
          rows={[]}
        />
      </div>
    </div>
  );
};
