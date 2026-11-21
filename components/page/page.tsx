import Header, { header } from "@/components/page/header";
import Sidebar, { sidebar } from "@/components/page/sidebar";
import Main, { main } from "@/components/page/main";
import Footer, { footer } from "@/components/page/footer";

export interface page {
  header_data: header;
  sidebar_data: sidebar;
  main_data: main;
  footer_data: footer;
}

export default function Page({ data }: { data: page }) {
  return (
    <>
      <Header data={data.header_data} />
      <Sidebar data={data.sidebar_data} />
      <Main data={data.main_data} />
      <Footer data={data.footer_data} />
    </>
  );
}
