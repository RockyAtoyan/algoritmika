import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Title: FC<Props> = ({ children }) => {
  return <h2 className={"text-3xl font-semibold mb-4"}>{children}</h2>;
};
