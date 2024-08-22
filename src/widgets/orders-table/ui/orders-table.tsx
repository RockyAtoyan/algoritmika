"use client";

import { Table } from "@/shared/ui/tables";
import { FC } from "react";
import Image from "next/image";
import { Coins, Trash } from "lucide-react";
import { Badge, Button, Checkbox, SearchInput, Title } from "@/shared/ui";

export const OrdersTable = () => {
  return (
    <div className={"mt-8"}>
      <div className={"flex items-center gap-5 justify-between"}>
        <Title>Заказы</Title>
        <div className={"flex items-center gap-3"}>
          <Button variant={"primary"}>Выдать отмеченные</Button>
          <SearchInput />
        </div>
      </div>
      <div className={"mt-5 bg-white rounded border-x"}>
        <Table
          headLabels={[
            "NO.",
            "пользователь / группа",
            "филиал",
            "товар",
            { label: "сумма", center: true },
            "",
            "",
          ]}
          rows={[
            [
              "697",
              <OrderTableUserCard />,
              //TODO: добавить проверку для ...
              'Школа программирования "Алгоритмика"'.slice(0, 40) + "...",
              'Стикерпак "Котики"',
              <div className={"flex items-center gap-3"}>
                <div className={"flex flex-col items-center gap-2"}>
                  <div className={"flex items-center gap-1"}>
                    <span>150</span> <Coins className={"w-4"} />
                  </div>
                  <Badge variant={"secondary"}>Оформлен</Badge>
                </div>
              </div>,
              { label: <Checkbox />, wrap: false, unclickable: true },
              {
                label: (
                  <Button size={"icon"} variant={"ghost"} className={"w-5 h-5"}>
                    <Trash className={"text-red-500"} />
                  </Button>
                ),
                wrap: false,
                unclickable: true,
              },
            ],
            [
              "697",
              <OrderTableUserCard />,
              //TODO: добавить проверку для ...
              'Школа программирования "Алгоритмика"'.slice(0, 40) + "...",
              {
                label: 'Мини-постеры "Genshin Impact" 50 шт.',
                unclickable: false,
                wrap: true,
              },
              <div className={"flex items-center gap-3"}>
                <div className={"flex flex-col items-center gap-2"}>
                  <div className={"flex items-center gap-1"}>
                    <span>150</span> <Coins className={"w-4"} />
                  </div>
                  <Badge variant={"secondary"}>Оформлен</Badge>
                </div>
              </div>,
              { label: <Checkbox />, wrap: false, unclickable: true },
              {
                label: (
                  <Button size={"icon"} variant={"ghost"} className={"w-5 h-5"}>
                    <Trash className={"text-red-500"} />
                  </Button>
                ),
                wrap: false,
                unclickable: true,
              },
            ],
            [
              "697",
              <OrderTableUserCard />,
              //TODO: добавить проверку для ...
              'Школа программирования "Алгоритмика"'.slice(0, 40) + "...",
              {
                label: 'Мини-постеры "Genshin Impact" 50 шт.',
                unclickable: false,
                wrap: true,
              },
              <div className={"flex items-center gap-3"}>
                <div className={"flex flex-col items-center gap-2"}>
                  <div className={"flex items-center gap-1"}>
                    <span>150</span> <Coins className={"w-4"} />
                  </div>
                  <Badge variant={"secondary"}>Оформлен</Badge>
                </div>
              </div>,
              { label: <Checkbox />, wrap: false, unclickable: true },
              {
                label: (
                  <Button size={"icon"} variant={"ghost"} className={"w-5 h-5"}>
                    <Trash className={"text-red-500"} />
                  </Button>
                ),
                wrap: false,
                unclickable: true,
              },
            ],
            [
              "697",
              <OrderTableUserCard />,
              //TODO: добавить проверку для ...
              'Школа программирования "Алгоритмика"'.slice(0, 40) + "...",
              {
                label: 'Мини-постеры "Genshin Impact" 50 шт.',
                unclickable: false,
                wrap: true,
              },
              <div className={"flex items-center gap-3"}>
                <div className={"flex flex-col items-center gap-2"}>
                  <div className={"flex items-center gap-1"}>
                    <span>150</span> <Coins className={"w-4"} />
                  </div>
                  <Badge variant={"secondary"}>Оформлен</Badge>
                </div>
              </div>,
              { label: <Checkbox />, wrap: false, unclickable: true },
              {
                label: (
                  <Button size={"icon"} variant={"ghost"} className={"w-5 h-5"}>
                    <Trash className={"text-red-500"} />
                  </Button>
                ),
                wrap: false,
                unclickable: true,
              },
            ],
            [
              "697",
              <OrderTableUserCard />,
              //TODO: добавить проверку для ...
              'Школа программирования "Алгоритмика"'.slice(0, 40) + "...",
              {
                label: 'Мини-постеры "Genshin Impact" 50 шт.',
                unclickable: false,
                wrap: true,
              },
              <div className={"flex items-center gap-3"}>
                <div className={"flex flex-col items-center gap-2"}>
                  <div className={"flex items-center gap-1"}>
                    <span>150</span> <Coins className={"w-4"} />
                  </div>
                  <Badge variant={"secondary"}>Оформлен</Badge>
                </div>
              </div>,
              { label: <Checkbox />, wrap: false, unclickable: true },
              {
                label: (
                  <Button size={"icon"} variant={"ghost"} className={"w-5 h-5"}>
                    <Trash className={"text-red-500"} />
                  </Button>
                ),
                wrap: false,
                unclickable: true,
              },
            ],
            [
              "697",
              <OrderTableUserCard />,
              //TODO: добавить проверку для ...
              'Школа программирования "Алгоритмика"'.slice(0, 40) + "...",
              {
                label: 'Мини-постеры "Genshin Impact" 50 шт.',
                unclickable: false,
                wrap: true,
              },
              <div className={"flex items-center gap-3"}>
                <div className={"flex flex-col items-center gap-2"}>
                  <div className={"flex items-center gap-1"}>
                    <span>150</span> <Coins className={"w-4"} />
                  </div>
                  <Badge variant={"secondary"}>Оформлен</Badge>
                </div>
              </div>,
              { label: <Checkbox />, wrap: false, unclickable: true },
              {
                label: (
                  <Button size={"icon"} variant={"ghost"} className={"w-5 h-5"}>
                    <Trash className={"text-red-500"} />
                  </Button>
                ),
                wrap: false,
                unclickable: true,
              },
            ],
            [
              "697",
              <OrderTableUserCard />,
              //TODO: добавить проверку для ...
              'Школа программирования "Алгоритмика"'.slice(0, 40) + "...",
              {
                label: 'Мини-постеры "Genshin Impact" 50 шт.',
                unclickable: false,
                wrap: true,
              },
              <div className={"flex items-center gap-3"}>
                <div className={"flex flex-col items-center gap-2"}>
                  <div className={"flex items-center gap-1"}>
                    <span>150</span> <Coins className={"w-4"} />
                  </div>
                  <Badge variant={"secondary"}>Оформлен</Badge>
                </div>
              </div>,
              { label: <Checkbox />, wrap: false, unclickable: true },
              {
                label: (
                  <Button size={"icon"} variant={"ghost"} className={"w-5 h-5"}>
                    <Trash className={"text-red-500"} />
                  </Button>
                ),
                wrap: false,
                unclickable: true,
              },
            ],
            [
              "697",
              <OrderTableUserCard />,
              //TODO: добавить проверку для ...
              'Школа программирования "Алгоритмика"'.slice(0, 40) + "...",
              {
                label: 'Мини-постеры "Genshin Impact" 50 шт.',
                unclickable: false,
                wrap: true,
              },
              <div className={"flex items-center gap-3"}>
                <div className={"flex flex-col items-center gap-2"}>
                  <div className={"flex items-center gap-1"}>
                    <span>150</span> <Coins className={"w-4"} />
                  </div>
                  <Badge variant={"secondary"}>Оформлен</Badge>
                </div>
              </div>,
              { label: <Checkbox />, wrap: false, unclickable: true },
              {
                label: (
                  <Button size={"icon"} variant={"ghost"} className={"w-5 h-5"}>
                    <Trash className={"text-red-500"} />
                  </Button>
                ),
                wrap: false,
                unclickable: true,
              },
            ],
            [
              "697",
              <OrderTableUserCard />,
              //TODO: добавить проверку для ...
              'Школа программирования "Алгоритмика"'.slice(0, 40) + "...",
              {
                label: 'Мини-постеры "Genshin Impact" 50 шт.',
                unclickable: false,
                wrap: true,
              },
              <div className={"flex items-center gap-3"}>
                <div className={"flex flex-col items-center gap-2"}>
                  <div className={"flex items-center gap-1"}>
                    <span>150</span> <Coins className={"w-4"} />
                  </div>
                  <Badge variant={"secondary"}>Оформлен</Badge>
                </div>
              </div>,
              { label: <Checkbox />, wrap: false, unclickable: true },
              {
                label: (
                  <Button size={"icon"} variant={"ghost"} className={"w-5 h-5"}>
                    <Trash className={"text-red-500"} />
                  </Button>
                ),
                wrap: false,
                unclickable: true,
              },
            ],
            [
              "697",
              <OrderTableUserCard />,
              //TODO: добавить проверку для ...
              'Школа программирования "Алгоритмика"'.slice(0, 40) + "...",
              {
                label: 'Мини-постеры "Genshin Impact" 50 шт.',
                unclickable: false,
                wrap: true,
              },
              <div className={"flex items-center gap-3"}>
                <div className={"flex flex-col items-center gap-2"}>
                  <div className={"flex items-center gap-1"}>
                    <span>150</span> <Coins className={"w-4"} />
                  </div>
                  <Badge variant={"secondary"}>Оформлен</Badge>
                </div>
              </div>,
              { label: <Checkbox />, wrap: false, unclickable: true },
              {
                label: (
                  <Button size={"icon"} variant={"ghost"} className={"w-5 h-5"}>
                    <Trash className={"text-red-500"} />
                  </Button>
                ),
                wrap: false,
                unclickable: true,
              },
            ],
            [
              "697",
              <OrderTableUserCard />,
              //TODO: добавить проверку для ...
              'Школа программирования "Алгоритмика"'.slice(0, 40) + "...",
              {
                label: 'Мини-постеры "Genshin Impact" 50 шт.',
                unclickable: false,
                wrap: true,
              },
              <div className={"flex items-center gap-3"}>
                <div className={"flex flex-col items-center gap-2"}>
                  <div className={"flex items-center gap-1"}>
                    <span>150</span> <Coins className={"w-4"} />
                  </div>
                  <Badge variant={"secondary"}>Оформлен</Badge>
                </div>
              </div>,
              { label: <Checkbox />, wrap: false, unclickable: true },
              {
                label: (
                  <Button size={"icon"} variant={"ghost"} className={"w-5 h-5"}>
                    <Trash className={"text-red-500"} />
                  </Button>
                ),
                wrap: false,
                unclickable: true,
              },
            ],
          ]}
        />
      </div>
    </div>
  );
};

interface OrderTableUserCardProps {}

const OrderTableUserCard: FC<OrderTableUserCardProps> = () => {
  return (
    <div className={"flex items-start gap-2"}>
      <Image
        src={
          "https://www.gravatar.com/avatar/dc576a480658ff9d10ef53f1e26fd49c?d=robohash"
        }
        alt={"user"}
        width={80}
        height={80}
        className={"w-8 aspect-square rounded-full bg-[#ced4da]"}
      />
      <div className={"flex flex-col"}>
        <span>Семкина Анжелика</span>
        <span className={"text-black/60"}>ПС, ВС 19-15, ЖБИ 2023-2024</span>
      </div>
    </div>
  );
};
