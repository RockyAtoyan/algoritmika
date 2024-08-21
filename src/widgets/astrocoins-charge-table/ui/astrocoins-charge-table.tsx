import {
  Button,
  CardTitle,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";
import { Filter } from "./filter";
import { Table } from "@/shared/ui/tables";
import { FC } from "react";

export const AstrocoinsChargeTable = () => {
  return (
    <div className={"bg-white rounded border"}>
      <div className={"py-3 pl-7"}>
        <CardTitle>Начисление астрокоинов</CardTitle>
      </div>
      <div className={"border-t py-6 px-7"}>
        <Filter />
      </div>
      <div>
        <Table
          headLabels={["ID", "ФИО", "Группы", "Начислить астрокоины"]}
          rows={[
            [
              "3376",
              "Кабанович Дмитрий",
              "ПС, ВС 19-15, ЖБИ 2023-2024",
              <AstrocoinsSelect />,
            ],
            [
              "3376",
              "Кабанович Дмитрий",
              "ПС, ВС 19-15, ЖБИ 2023-2024",
              <AstrocoinsSelect />,
            ],
            [
              "3376",
              "Кабанович Дмитрий",
              "ПС, ВС 19-15, ЖБИ 2023-2024",
              <AstrocoinsSelect />,
            ],
            [
              "3376",
              "Кабанович Дмитрий",
              "ПС, ВС 19-15, ЖБИ 2023-2024",
              <AstrocoinsSelect />,
            ],
            [
              "3376",
              "Кабанович Дмитрий",
              "ПС, ВС 19-15, ЖБИ 2023-2024",
              <AstrocoinsSelect />,
            ],
            [
              "3376",
              "Кабанович Дмитрий",
              "ПС, ВС 19-15, ЖБИ 2023-2024",
              <AstrocoinsSelect />,
            ],
            [
              "3376",
              "Кабанович Дмитрий",
              "ПС, ВС 19-15, ЖБИ 2023-2024",
              <AstrocoinsSelect />,
            ],
          ]}
        />
      </div>
      <Button className={"block ml-auto mr-3 my-3"} variant={"primary"}>
        Сохранить
      </Button>
    </div>
  );
};

interface AstrocoinsSelectProps {}

const AstrocoinsSelect: FC<AstrocoinsSelectProps> = () => {
  return (
    <Select>
      <SelectTrigger className={"w-3/4 max-w-[250px]"}>
        <SelectValue placeholder="Заслуга" />
      </SelectTrigger>
      <SelectContent className={""}>
        <SelectGroup>
          <SelectItem value="1">ПС, ВС 19-15, ЖБИ 2023-2024</SelectItem>
          <SelectItem value="2">
            Юнити, СБ 14-00, ЖБИ 2023-2024, ПС, ВС 19-15, ЖБИ 2023-2024
          </SelectItem>
          <SelectItem value="3">
            PS ср 19:00 23/24 Уральская, Юнити чт 16:15 23/24 Уральская
          </SelectItem>
          <SelectItem value="4">
            PS ср 19:00 23/24 Уральская, Юнити чт 16:15 23/24 Уральская
          </SelectItem>
          <SelectItem value="5">
            PS ср 19:00 23/24 Уральская, Юнити чт 16:15 23/24 Уральская
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
