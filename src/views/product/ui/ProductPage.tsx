import { NextPage } from "next";
import { ProductSlider } from "@/widgets/product-slider";
import { Breadcrumbs, Button, Coins } from "@/shared/ui";
import { ShoppingBasket, Star } from "lucide-react";

interface Props {
  params: {
    id: string;
  };
}

export const ProductPage: NextPage<Props> = ({ params }) => {
  return (
    <div>
      <Breadcrumbs
        homeElement={"Главная"}
        lastElement={"Авторучка Алгоритмика (пластиковая)"}
      />
      <div className={"flex gap-8 mt-8"}>
        <div className={"w-1/2"}>
          <div className={"mx-auto w-3/4"}>
            <ProductSlider
              images={[
                "https://algo96.ru/attachments/avesgtrgrczdrp1f5gu0kc1yb?name=img-20231112-wa0015-photoroompng-photoroom.png&disposition=inline",
                "https://algo96.ru/attachments/77gzp9ceyaq91i09700r4rwsd?name=avtorucka-algoritmka.jpg&disposition=inline",
                "https://algo96.ru/attachments/77gzp9ceyaq91i09700r4rwsd?name=avtorucka-algoritmka.jpg&disposition=inline",
                "https://algo96.ru/attachments/77gzp9ceyaq91i09700r4rwsd?name=avtorucka-algoritmka.jpg&disposition=inline",
                "https://algo96.ru/attachments/77gzp9ceyaq91i09700r4rwsd?name=avtorucka-algoritmka.jpg&disposition=inline",
              ]}
            />
          </div>
        </div>
        <div className={"w-1/2 pt-10"}>
          <h1 className={"mb-1 block text-3xl font-semibold "}>
            Авторучка Алгоритмика (пластиковая)
          </h1>
          <span className={"block mb-5 text-2xl text-black/50"}>
            В наличии: 6 шт.
          </span>
          <div className={"mb-3 flex items-center gap-3"}>
            {Array(5)
              .fill(0)
              .map((_, index) => {
                return <Star fill={"yellow"} />;
              })}
          </div>
          <Coins className={"text-5xl"}>100</Coins>
          <p className={"my-5 text-base"}>
            Это не просто письменный инструмент, а символ современности и
            функциональности. Изготовленная из прочного пластика, эта авторучка
            отличается легкостью и долговечностью, что делает ее идеальным
            выбором для ежедневного использования.
          </p>
          <Button variant={"primary"} className={"flex items-center gap-2"}>
            <ShoppingBasket />
            <span>Купить</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
