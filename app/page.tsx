import Footer from "@/components/page/footer";
import Header from "@/components/page/header";
import Sidebar from "@/components/page/sidebar";
import Main from "@/components/page/main";

import "@/styles/shared.css";
import "@/styles/app/shared.css";
import "@/styles/app/homepage.css";

import homepage_data from "@/data/app/homepage/compiled/page.json"

export default function HomePage() {
  return (
    <>
      <Header data={homepage_data.header_data} />
      <Sidebar data={homepage_data.sidebar_data} />
      <Main data={homepage_data.main_data} />
      <Footer data={homepage_data.footer_data} />
    </>
  );
}
