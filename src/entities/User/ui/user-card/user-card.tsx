import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {}

export const UserCard: FC<Props> = () => {
  return (
    <Link href={"/dashboard/students/1"} className={"flex items-center gap-3"}>
      <Image
        src={
          "https://www.gravatar.com/avatar/ad4b40deb9cf322fa514b4b457e470a7?d=robohash"
        }
        alt={"user"}
        width={500}
        height={500}
        className={"w-8 aspect-square object-cover rounded-full bg-[#ced4da]"}
      />
      <div className={"flex flex-col"}>
        <span className={"text-[15px]"}>Семкина Анжелика</span>
        <span className={"text-[13px] text-gray-400"}>Ученик</span>
      </div>
    </Link>
  );
};
