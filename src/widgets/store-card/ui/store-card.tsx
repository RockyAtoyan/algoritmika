"use client";

import { FC } from "react";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Coins,
} from "@/shared/ui";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";

interface Props {}

export const StoreCard: FC<Props> = () => {
  return (
    <div className={"bg-background border rounded"}>
      <div className={"w-full aspect-square"}>
        {/*<Image*/}
        {/*  src={*/}
        {/*    "https://algo96.ru/attachments/77gzp9ceyaq91i09700r4rwsd?name=avtorucka-algoritmka.jpg&disposition=inline"*/}
        {/*  }*/}
        {/*  alt={"card"}*/}
        {/*  width={500}*/}
        {/*  height={500}*/}
        {/*  className={"w-full h-full object-cover object-center"}*/}
        {/*/>*/}
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 3000 })]}
          className="w-full h-full"
        >
          <CarouselContent>
            <CarouselItem>
              <Image
                src={
                  "https://algo96.ru/attachments/avesgtrgrczdrp1f5gu0kc1yb?name=img-20231112-wa0015-photoroompng-photoroom.png&disposition=inline"
                }
                alt={"card"}
                width={500}
                height={500}
                className={"w-full h-full object-cover object-center"}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={
                  "https://algo96.ru/attachments/77gzp9ceyaq91i09700r4rwsd?name=avtorucka-algoritmka.jpg&disposition=inline"
                }
                alt={"card"}
                width={500}
                height={500}
                className={"w-full h-full object-cover object-center"}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className={"left-0 -translate-x-1/2"} />
          <CarouselNext className={"right-0 translate-x-1/2"} />
        </Carousel>
      </div>
      <div className={"p-4 pb-6 border-t"}>
        <Link href={"/store/1"} className={"block text-lg hover:underline"}>
          Авторучка Алгоритмика (пластиковая)
        </Link>
        <span className={"text-sm text-primary/40"}>В наличии: 6 шт.</span>
        <div className={"flex items-center gap-3 justify-between mt-4"}>
          <div className={"-mt-1"}>
            <Coins>100</Coins>
          </div>
          <Button asChild variant={"primary"}>
            <Link href={"/store/1"} className={"flex items-center gap-2"}>
              <ShoppingBasket />
              <span>Купить</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
