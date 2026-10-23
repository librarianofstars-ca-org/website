import { PageHead, PageBody } from "@/components/meta";
import { IdentifiedHeading } from "@/components/elements/heading";

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
      <PageBody>
        <IdentifiedHeading
          contents={""}
          level={7}
          className={"nav-id-hidden"}
          headingId={"page_start"}
        />
        {children}
        <IdentifiedHeading
          contents={""}
          level={7}
          className={"nav-id-hidden"}
          headingId={"page_end"}
        />
      </PageBody>
    </html>
  );
}
