import GalleryBlock from "@/components/blocks/gallery_block";
import ParagraphBlock from "@/components/blocks/paragraph_block";
import LinkBLock from "@/components/blocks/link_block";
import Section, { section } from "@/components/elements/structure/section";

import Footer from "@/components/page/footer";
import Header from "@/components/page/header";
import Sidebar from "@/components/page/sidebar";
import Main from "@/components/page/main";

import "@/styles/shared.css";
import "@/styles/app/shared.css";
import "@/styles/app/homepage.css";

import { to_key } from "@/utilities/key_mapping";

import welcome_paragraph_data from "@/data/app/homepage/blocks/welcome.json";
import summery_paragraph_data from "@/data/app/homepage/blocks/summery.json";
import contact_me_links_data from "@/data/app/homepage/blocks/contact_me.json";
import showcase_art_data from "@/data/app/homepage/blocks/art_show.json";
import showcase_links_data from "@/data/app/homepage/blocks/projects.json";

import homepage_footer_data from "@/data/app/homepage/page/footer.json";
import homepage_sidebar_data from "@/data/app/homepage/compiled/sidebar.json";
import homepage_header_data from "@/data/app/homepage/compiled/header.json";
// import homepage_main_data from "@/data/app/homepage/compiled/main.json";

export default function HomePage() {
  return (
    <>
      <Header data={homepage_header_data} />
      <Sidebar data={homepage_sidebar_data} />
      <Main
      // data={homepage_main_data}
      >
        <Section data={welcome_splash_data} />
        <Section data={about_me_data} />
        <Section data={showcase_data} />
      </Main>
      <Footer data={homepage_footer_data} />
    </>
  );
}

let welcome_splash_data: section = {
  id: { index: 1, name: "welcome" },
  heading: { level: 2, contents: "Welcome", id: "greatings" },
  contents: [welcome_paragraph_data],
};

let summery_data: section = {
  id: { index: 1, name: "summery" },
  heading: { level: 3, contents: "Summery", id: "summery" },
  contents: [summery_paragraph_data],
};

let contact_me_data: section = {
  id: { index: 1, name: "contact_me" },
  heading: { level: 3, contents: "Links", id: "links" },
  contents: [contact_me_links_data],
};

let about_me_data: section = {
  id: { index: 1, name: "about_me" },
  heading: { level: 2, contents: "About Me", id: "about" },
  contents: [summery_data, contact_me_data],
};

let gallery_data: section = {
  id: { index: 1, name: "gallery" },
  heading: { level: 3, contents: "Art", id: "gallery" },
  contents: [showcase_art_data],
};

let linked_section_data: section = {
  id: { index: 1, name: "linked_section" },
  heading: { level: 3, contents: "Projects", id: "linked_projects" },
  contents: [showcase_links_data],
};

let showcase_data: section = {
  id: { index: 1, name: "showcase" },
  heading: { level: 2, contents: "Showcase", id: "display" },
  contents: [gallery_data, linked_section_data],
};
