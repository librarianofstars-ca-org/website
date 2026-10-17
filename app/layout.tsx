import PageHead from "@/components/meta";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PageHead />
      <body>{children}</body>
    </html>
  );
}
