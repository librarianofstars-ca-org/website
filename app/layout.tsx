import { PageHead, PageBody } from "@/components/meta";
import Heading, { heading } from "@/components/elements/heading";

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
      <PageBody>{children}</PageBody>
    </html>
  );
}
