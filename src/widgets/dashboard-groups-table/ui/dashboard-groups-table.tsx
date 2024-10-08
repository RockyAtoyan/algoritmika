"use client";

import { Table } from "@/shared/ui/tables";
import { plural } from "@/shared/utils";
import { Badge } from "@/shared/ui";
import { useRouter } from "next/navigation";

export const DashboardGroupsTable = () => {
  const router = useRouter();

  return (
    <div className={"bg-background border-x rounded w-full"}>
      <Table
        clickHandler={() => {
          router.push("/dashboard/groups/1");
        }}
        separatorColspan={9}
        headLabels={[
          "id",
          "группа",
          "кол-во учеников",
          "город",
          "площадка",
          "расписание",
          "статус",
          "педагог",
        ]}
        rows={[
          "Разработка игр на Unity",
          [
            "35",
            "Юнити, СБ 14-00, ЖБИ 2023-2024, ПС, ВС 19-15, ЖБИ 2023-2024".slice(
              0,
              18,
            ) + "...",
            "6 " + plural(6, ["ученик", "ученика", "учеников"]),
            "Екатеринбург".slice(0, 10) + "...",
            //TODO: добавить проверку для ...
            'Школа программирования "Алгоритмика"'.slice(0, 32) + "...",
            <div className={"flex flex-col gap-1 text-sm"}>
              <span>Чтв. 14:30 - 16:00</span>
              <span>Кабинет: 2</span>
            </div>,
            <Badge variant={"secondary"}>Активна</Badge>,
            "Михайлов ДВ",
          ],
          [
            "35",
            "Юнити, СБ 14-00, ЖБИ 2023-2024, ПС, ВС 19-15, ЖБИ 2023-2024".slice(
              0,
              18,
            ) + "...",
            "6 " + plural(6, ["ученик", "ученика", "учеников"]),
            "Екатеринбург".slice(0, 10) + "...",
            //TODO: добавить проверку для ...
            'Школа программирования "Алгоритмика"'.slice(0, 32) + "...",
            <div className={"flex flex-col gap-1 text-sm"}>
              <span>Чтв. 14:30 - 16:00</span>
              <span>Кабинет: 2</span>
            </div>,
            <Badge variant={"secondary"}>Активна</Badge>,
            "Михайлов ДВ",
          ],
          [
            "35",
            "Юнити, СБ 14-00, ЖБИ 2023-2024, ПС, ВС 19-15, ЖБИ 2023-2024".slice(
              0,
              18,
            ) + "...",
            "6 " + plural(6, ["ученик", "ученика", "учеников"]),
            "Екатеринбург".slice(0, 10) + "...",
            //TODO: добавить проверку для ...
            'Школа программирования "Алгоритмика"'.slice(0, 32) + "...",
            <div className={"flex flex-col gap-1 text-sm"}>
              <span>Чтв. 14:30 - 16:00</span>
              <span>Кабинет: 2</span>
            </div>,
            <Badge variant={"secondary"}>Активна</Badge>,
            "Михайлов ДВ",
          ],
          "Python Start 1 год",
          [
            "35",
            "Юнити, СБ 14-00, ЖБИ 2023-2024, ПС, ВС 19-15, ЖБИ 2023-2024".slice(
              0,
              18,
            ) + "...",
            "6 " + plural(6, ["ученик", "ученика", "учеников"]),
            "Екатеринбург".slice(0, 10) + "...",
            //TODO: добавить проверку для ...
            'Школа программирования "Алгоритмика"'.slice(0, 32) + "...",
            <div className={"flex flex-col gap-1 text-sm"}>
              <span>Чтв. 14:30 - 16:00</span>
              <span>Кабинет: 2</span>
            </div>,
            <Badge variant={"secondary"}>Активна</Badge>,
            "Михайлов ДВ",
          ],
          [
            "35",
            "Юнити, СБ 14-00, ЖБИ 2023-2024, ПС, ВС 19-15, ЖБИ 2023-2024".slice(
              0,
              18,
            ) + "...",
            "6 " + plural(6, ["ученик", "ученика", "учеников"]),
            "Екатеринбург".slice(0, 10) + "...",
            //TODO: добавить проверку для ...
            'Школа программирования "Алгоритмика"'.slice(0, 32) + "...",
            <div className={"flex flex-col gap-1 text-sm"}>
              <span>Чтв. 14:30 - 16:00</span>
              <span>Кабинет: 2</span>
            </div>,
            <Badge variant={"secondary"}>Активна</Badge>,
            "Михайлов ДВ",
          ],
          [
            "35",
            "Юнити, СБ 14-00, ЖБИ 2023-2024, ПС, ВС 19-15, ЖБИ 2023-2024".slice(
              0,
              18,
            ) + "...",
            "6 " + plural(6, ["ученик", "ученика", "учеников"]),
            "Екатеринбург".slice(0, 10) + "...",
            //TODO: добавить проверку для ...
            'Школа программирования "Алгоритмика"'.slice(0, 32) + "...",
            <div className={"flex flex-col gap-1 text-sm"}>
              <span>Чтв. 14:30 - 16:00</span>
              <span>Кабинет: 2</span>
            </div>,
            <Badge variant={"secondary"}>Активна</Badge>,
            "Михайлов ДВ",
          ],
          "Python Start 2 год",
          [
            "35",
            "Юнити, СБ 14-00, ЖБИ 2023-2024, ПС, ВС 19-15, ЖБИ 2023-2024".slice(
              0,
              18,
            ) + "...",
            "6 " + plural(6, ["ученик", "ученика", "учеников"]),
            "Екатеринбург".slice(0, 10) + "...",
            //TODO: добавить проверку для ...
            'Школа программирования "Алгоритмика"'.slice(0, 32) + "...",
            <div className={"flex flex-col gap-1 text-sm"}>
              <span>Чтв. 14:30 - 16:00</span>
              <span>Кабинет: 2</span>
            </div>,
            <Badge variant={"secondary"}>Активна</Badge>,
            "Михайлов ДВ",
          ],
        ]}
      />
    </div>
  );
};
