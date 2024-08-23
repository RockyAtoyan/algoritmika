import { Title } from "@/shared/ui";
import { Table } from "@/shared/ui/tables";

export const TicketsTable = () => {
  return (
    <div className={"mt-8"}>
      <Title>Заявки</Title>
      <div className={"mt-5 bg-white rounded border-x"}>
        <Table
          headLabels={["#", "От", "Адресовано", "Дата создания", "Статус"]}
          rows={[]}
        />
      </div>
    </div>
  );
};
