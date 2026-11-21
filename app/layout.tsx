import { PageHead } from "@/components/meta/head";

import "@/styles/pallette.css";
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
      {children}
    </html>
  );
}
