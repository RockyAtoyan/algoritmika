import { DashboardMenu } from "@/widgets/dashboard-menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={"w-full border-b bg-background"}>
        <div className={"max-w-[var(--container)] px-4 mx-auto"}>
          <DashboardMenu />
        </div>
      </div>
      <main className={"pt-4 pb-8"}>{children}</main>
    </>
  );
}
