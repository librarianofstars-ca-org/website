import Header, { header } from "@/components/page/header";
import Sidebar, { sidebar } from "@/components/page/sidebar";
import Main, { main } from "@/components/page/main";
import Footer, { footer } from "@/components/page/footer";

import Heading, { heading } from "@/components/elements/heading";
import { ErrorData, validate_against_schema } from "@/schema/validation";

export interface body {
  page_markers: boolean;
  header_data: header;
  sidebar_data: sidebar;
  main_data: main;
  footer_data: footer;
}

const page_marker_data: heading = {
  contents: "",
  level: 7,
  className: "nav-id-hidden",
};

export default function Body({ data }: { data: body }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/meta/body.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <body id="page">
      {data.page_markers && (
        <Heading data={{ ...page_marker_data, id: "page_start" }} />
      )}
      <Header data={data.header_data} />
      <Sidebar data={data.sidebar_data} />
      <Main data={data.main_data} />
      <Footer data={data.footer_data} />
      {data.page_markers && (
        <Heading data={{ ...page_marker_data, id: "page_end" }} />
      )}
    </body>
  );
}
