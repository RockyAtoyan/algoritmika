import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer/ui/footer";
import { cn } from "@/shared/utils";
import { Providers } from "@/processes/providers";
import localFont from "next/font/local";

const font = localFont({
  src: [
    {
      path: "./../../public/font/CeraPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../public/font/CeraPro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../../public/font/CeraPro-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./../../public/font/CeraPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../public/font/CeraPro-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./../../public/font/CeraPro-Medium.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className, "min-h-screen flex flex-col")}>
        <Providers>
          <Header />
          <div className={"flex-[1_0_auto] dark:bg-background/95"}>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
