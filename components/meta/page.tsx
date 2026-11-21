import Header, { header } from "@/components/page/header";
import Sidebar, { sidebar } from "@/components/page/sidebar";
import Main, { main } from "@/components/page/main";
import Footer, { footer } from "@/components/page/footer";
import Heading, { heading } from "@/components/elements/heading";

export interface page {
  body: {
    page_markers: boolean;
    header_data: header;
    sidebar_data: sidebar;
    main_data: main;
    footer_data: footer;
  };
}

const page_marker_data: heading = {
  contents: "",
  level: 7,
  className: "nav-id-hidden",
};

export default function Page({ data }: { data: page }) {
  return (
    <body id="page">
      {data.body.page_markers && (
        <Heading data={{ ...page_marker_data, id: "page_start" }} />
      )}
      <Header data={data.body.header_data} />
      <Sidebar data={data.body.sidebar_data} />
      <Main data={data.body.main_data} />
      <Footer data={data.body.footer_data} />
      {data.body.page_markers && (
        <Heading data={{ ...page_marker_data, id: "page_end" }} />
      )}
    </body>
  );
}

