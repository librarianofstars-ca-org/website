import { PageHead, PageBody } from "@/components/meta";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PageHead />
      <PageBody>{children}</PageBody>
    </html>
  );
}
