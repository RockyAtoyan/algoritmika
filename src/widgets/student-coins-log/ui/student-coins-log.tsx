import { Table } from "@/shared/ui/tables";

export const StudentCoinsLog = () => {
  return (
    <div className={"bg-white rounded border"}>
      <div className={"py-4 px-6 border-b"}>
        <h3 className={"text-lg font-semibold"}>Журнал астрокоинов</h3>
      </div>
      <div className={"h-[15rem] overflow-auto"}>
        <Table
          headLabels={[
            "ID",
            "дата",
            "номинал",
            "операция",
            "основание",
            "инициатор",
          ]}
          rows={[
            [
              <span className={"text-black/40"}>13489</span>,
              <div className={"flex flex-col"}>
                <span>25.05.24</span>
                <span>13:33</span>
              </div>,
              <div className={"text-center"}>500</div>,
              "Покупка",
              "Настольная игра дубль Minecraft",
              "Ударцев М",
            ],
            [
              <span className={"text-black/40"}>13489</span>,
              <div className={"flex flex-col"}>
                <span>25.05.24</span>
                <span>13:33</span>
              </div>,
              <div className={"text-center"}>500</div>,
              "Начисление",
              "Занятие 18.05.2024 + аванс",
              "Хамоян МИ",
            ],
            [
              <span className={"text-black/40"}>13489</span>,
              <div className={"flex flex-col"}>
                <span>25.05.24</span>
                <span>13:33</span>
              </div>,
              <div className={"text-center"}>500</div>,
              "Начисление",
              "Занятие 18.05.2024 + аванс",
              "Хамоян МИ",
            ],
            [
              <span className={"text-black/40"}>13489</span>,
              <div className={"flex flex-col"}>
                <span>25.05.24</span>
                <span>13:33</span>
              </div>,
              <div className={"text-center"}>500</div>,
              "Начисление",
              "Занятие 18.05.2024 + аванс",
              "Хамоян МИ",
            ],
            [
              <span className={"text-black/40"}>13489</span>,
              <div className={"flex flex-col"}>
                <span>25.05.24</span>
                <span>13:33</span>
              </div>,
              <div className={"text-center"}>500</div>,
              "Начисление",
              "Занятие 18.05.2024 + аванс",
              "Хамоян МИ",
            ],
            [
              <span className={"text-black/40"}>13489</span>,
              <div className={"flex flex-col"}>
                <span>25.05.24</span>
                <span>13:33</span>
              </div>,
              <div className={"text-center"}>500</div>,
              "Начисление",
              "Занятие 18.05.2024 + аванс",
              "Хамоян МИ",
            ],
            [
              <span className={"text-black/40"}>13489</span>,
              <div className={"flex flex-col"}>
                <span>25.05.24</span>
                <span>13:33</span>
              </div>,
              <div className={"text-center"}>500</div>,
              "Начисление",
              "Занятие 18.05.2024 + аванс",
              "Хамоян МИ",
            ],
            [
              <span className={"text-black/40"}>13489</span>,
              <div className={"flex flex-col"}>
                <span>25.05.24</span>
                <span>13:33</span>
              </div>,
              <div className={"text-center"}>500</div>,
              "Начисление",
              "Занятие 18.05.2024 + аванс",
              "Хамоян МИ",
            ],
            [
              <span className={"text-black/40"}>13489</span>,
              <div className={"flex flex-col"}>
                <span>25.05.24</span>
                <span>13:33</span>
              </div>,
              <div className={"text-center"}>500</div>,
              "Начисление",
              "Занятие 18.05.2024 + аванс",
              "Хамоян МИ",
            ],
          ]}
        />
      </div>
    </div>
  );
};
