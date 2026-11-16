import GalleryBlock, { gallery_items } from "@/components/blocks/gallery_block";
import ParagraphBlock from "@/components/blocks/paragraph_block";
import LinkBLock from "@/components/blocks/link_block";
import Section from "@/components/elements/section";

import Footer, { footer_sections } from "@/components/page_structure/footer";
import Header from "@/components/page_structure/header";
import Sidebar from "@/components/page_structure/sidebar";
import Main from "@/components/page_structure/main";
import TableOfContents, {
  outlined_heading,
} from "@/components/elements/table_of_contents";

import "@/styles/shared.css";
import "@/styles/app/shared.css";
import "@/styles/app/homepage.css";

import { to_key } from "@/utilities/key_mapping";


import welcome_paragraph_data from "@/data/app/homepage/blocks/welcome.json";
import summery_paragraph_data from "@/data/app/homepage/blocks/summery.json";
import contact_me_links_data from "@/data/app/homepage/blocks/contact_me.json";
import showcase_art_data from "@/data/app/homepage/blocks/art_show.json";
import showcase_links_data from "@/data/app/homepage/blocks/projects.json";

let outline: outlined_heading[] = [
  { order: 0, header: "Homepage", linked_id: "#home", type: 1 },
  { order: 1, header: "Welcome", linked_id: "#greating", type: 2 },
  { order: 2, header: "Links", linked_id: "#links", type: 2 },
  { order: 3, header: "Internal", linked_id: "#internal_links", type: 3 },
  { order: 4, header: "External", linked_id: "#external_links", type: 3 },
  { order: 5, header: "About Me", linked_id: "#about", type: 2 },
  { order: 6, header: "Personal Details", linked_id: "#personal", type: 3 },
  { order: 7, header: "Name", linked_id: "#personal_name", type: 4 },
  { order: 8, header: "Nicknames", linked_id: "#personal_name_nicks", type: 5 },
  { order: 9, header: "Pronouns", linked_id: "#personal_pronouns", type: 4 },
  { order: 10, header: "Small Header", linked_id: "#test1", type: 5 },
  { order: 11, header: "Smaller Header", linked_id: "#test2", type: 6 },
];



let homepage_footer_sections: footer_sections = [
  {
    order: 1,
    title: "Credits",
    contents: [
      { type: "Site Design", content: ["Librarian Of Stars"] },
      {
        type: "Contributors",
        content: ["Librarian Of Stars", "ChrisNolan.ca"],
      },
    ],
  },
  {
    order: 2,
    title: "Contact",
    contents: [
      {
        type: "Email",
        content: [
          <a href="mailto:contact@libarianofstars.ca">
            contact@libarianofstars.ca
          </a>,
        ],
      },
      {
        type: "Placeholder",
        content: ["account 1", "account 2", "account 3"],
      },
      {
        type: "Github",
        content: ["Librarian Of Stars"],
      },
    ],
  },
];

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
  return (
    <Sidebar>
      <TableOfContents contents_headers={outline} />
    </Sidebar>
  );
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
      contents={
        [
          <LinkBLock
            key={"gallery-2"}
            data={showcase_links_data}
          />,
        ]
      }
    />
  );
}

function HomePageFooter() {
  return <Footer sections={homepage_footer_sections} />;
}
