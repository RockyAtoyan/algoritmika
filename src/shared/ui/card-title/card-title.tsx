import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const CardTitle: FC<Props> = ({ children }) => {
  return <h3 className={"text-lg"}>{children}</h3>;
};
