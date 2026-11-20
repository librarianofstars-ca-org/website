import GalleryBlock, { gallery_items } from "@/components/blocks/gallery_block";
import ParagraphBlock from "@/components/blocks/paragraph_block";
import LinkBLock from "@/components/blocks/link_block";
import Section from "@/components/elements/structure/section";

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

export default function HomePage() {
  return (
    <>
      <HomePageHeader />
      <HomePageSidebar />
      <HomePageMain />
      <HomePageFooter />
    </>
  );
}

function HomePageHeader() {
  return (
    <Header
    // specificNavLinks={[{ id: "3", linked: "./example", display: "test" }]}
    />
  );
}

function HomePageSidebar() {
  return <Sidebar data={homepage_sidebar_data} />;
}

function HomePageMain() {
  return (
    <Main>
      {/* <Example data={test_data} /> */}
      <HomePageWelcomeSplashSection />
      <HomePageAboutMeSection />
      <HomePageShowcaseSection />
    </Main>
  );
}

function HomePageWelcomeSplashSection() {
  return (
    <Section
      heading={{ level: 2, contents: "Welcome", id: "greatings" }}
      contents={[
        <ParagraphBlock
          key={to_key(welcome_paragraph_data.id)}
          data={welcome_paragraph_data}
        />,
      ]}
    />
  );
}

function HomePageAboutMeSection() {
  return (
    <Section
      heading={{ level: 2, contents: "About Me", id: "about" }}
      contents={[
        <HomePageSummerySection key={"about-1"} />,
        <HomePageLinksSection key={"about-2"} />,
      ]}
    />
  );
}

function HomePageSummerySection() {
  return (
    <Section
      heading={{ level: 3, contents: "Summery", id: "summery" }}
      contents={[
        <ParagraphBlock
          key="summery-1"
          data={summery_paragraph_data}
        />,
      ]}
    />
  );
}

function HomePageLinksSection() {
  return (
    <Section
      heading={{ level: 3, contents: "Links", id: "links" }}
      contents={[
        <LinkBLock
          key={"contact_me_1"}
          data={contact_me_links_data}
        />,
      ]}
    />
  );
}

function HomePageShowcaseSection() {
  return (
    <Section
      heading={{ level: 2, contents: "Showcase", id: "display" }}
      contents={[
        <HomePageArtGallerySection key={"display-1"} />,
        <HopePageProjectsLinkedSection key={"display-2"} />,
      ]}
    />
  );
}

function HomePageArtGallerySection() {
  return (
    <Section
      heading={{ level: 3, contents: "Art", id: "gallery" }}
      contents={[
        <GalleryBlock
          key="gallery-1"
          data={showcase_art_data}
        />,
      ]}
    />
  );
}

function HopePageProjectsLinkedSection() {
  return (
    <Section
      heading={{ level: 3, contents: "Projects", id: "linked_projects" }}
      contents={[
        <LinkBLock
          key={"gallery-2"}
          data={showcase_links_data}
        />,
      ]}
    />
  );
}

function HomePageFooter() {
  return <Footer data={homepage_footer_data} />;
}
