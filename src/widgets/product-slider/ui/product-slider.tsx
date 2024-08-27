"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { FC, useEffect, useRef, useState } from "react";
import { cn } from "@/shared/utils";

interface Props {
  images: string[];
}

export const ProductSlider: FC<Props> = ({ images }) => {
  const [emblaRef, api] = useEmblaCarousel();

  const [current, setCurrent] = useState(0);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const next = () => {
    api?.scrollNext();
  };

  const prev = () => {
    api?.scrollPrev();
  };

  const changeImage = (index: number) => {
    if (index === current) return;
    imageRef.current?.classList.add("opacity-0");
    setTimeout(() => {
      setCurrent(index);
    }, 150);
    setTimeout(() => {
      imageRef.current?.classList.remove("opacity-0");
    }, 200);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, []);

  return (
    <div className={"flex flex-col gap-5"}>
      <div
        className={
          "w-full aspect-square bg-white border rounded overflow-hidden"
        }
      >
        <Image
          ref={imageRef}
          src={images[current]}
          alt={"product"}
          width={1000}
          height={1000}
          className={"w-full h-full object-cover object-center transition-all"}
        />
      </div>
      <div className={"mx-auto w-3/4"}>
        {images.length > 3 && (
          <Carousel ref={emblaRef} opts={{ loop: true }}>
            <CarouselContent>
              {images.map((image, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className={cn("basis-1/3 cursor-pointer")}
                    onClick={() => {
                      changeImage(index);
                    }}
                  >
                    <Image
                      src={image}
                      alt={"card"}
                      width={500}
                      height={500}
                      className={cn(
                        "w-full h-full object-cover object-center bg-white rounded border transition",
                        index === current && "border-main",
                      )}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
        {images.length <= 3 && (
          <div className={"flex items-center justify-center gap-4"}>
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    "w-1/3 aspect-square overflow-hidden cursor-pointer bg-white rounded border transition",
                    index === current && "border-main",
                  )}
                  onClick={() => {
                    changeImage(index);
                  }}
                >
                  <Image
                    src={image}
                    alt={"card"}
                    width={500}
                    height={500}
                    className={"w-full h-full object-cover object-center"}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
