import { PageHead, PageBody } from "@/components/meta";

import "@/styles/base.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="style-root"
    >
      <PageHead />
      <PageBody>{children}</PageBody>
    </html>
  );
}
