import { PageHead, PageBody } from "@/components/meta";
import Heading, { heading } from "@/components/elements/heading";

import "@/styles/pallette.css";
import "@/styles/base.css";

const page_marker_data: heading = {
  contents: "",
  level: 7,
  className: "nav-id-hidden",
};

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
        <Heading data={{ ...page_marker_data, id: "page_start" }} />
        {children}
        <Heading data={{ ...page_marker_data, id: "page_end" }} />
      </PageBody>
    </html>
  );
}
