import Footer from "@/components/page/footer";
import Header from "@/components/page/header";
import Sidebar from "@/components/page/sidebar";
import Main from "@/components/page/main";

import "@/styles/shared.css";
import "@/styles/app/shared.css";
import "@/styles/app/homepage.css";

import homepage_footer_data from "@/data/app/homepage/page/footer.json";
import homepage_sidebar_data from "@/data/app/homepage/compiled/sidebar.json";
import homepage_header_data from "@/data/app/homepage/compiled/header.json";
import homepage_main_data from "@/data/app/homepage/compiled/main.json";

export default function HomePage() {
  return (
    <>
      <Header data={homepage_header_data} />
      <Sidebar data={homepage_sidebar_data} />
      <Main data={homepage_main_data} />
      <Footer data={homepage_footer_data} />
    </>
  );
}
