import { Input, InputProps } from "@/shared/ui";
import { FC, ReactNode } from "react";
interface Props extends InputProps {
  Icon: any;
}

export const InputWithIcon: FC<Props> = ({ Icon, ...props }: any) => {
  return (
    <div className={"relative text-black/40 flex items-stretch gap-2"}>
      <Icon
        className={
          "absolute w-5 top-1/2 -translate-y-1/2 -translate-x-1/2 left-6 "
        }
      />
      <Input className={"pl-12 text-black"} {...props} />
    </div>
  );
};
