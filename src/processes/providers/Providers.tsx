"use client";

import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "./theme/theme-provider";

interface Props {
  children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};
