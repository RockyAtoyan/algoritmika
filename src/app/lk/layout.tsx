export default function LkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className={"pt-4 pb-8"}>{children}</main>
    </>
  );
}
