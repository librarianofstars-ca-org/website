import Gallery, { GalleryItem } from "@/components/content_blocks/gallery";
import ParagraphBlock from "@/components/content_blocks/paragraph_block";
import LinkBLock, {
  block_of_links,
} from "@/components/content_blocks/link_block";
import Section from "@/components/content_blocks/section";

import Footer from "@/components/page_structure/footer";
import Header from "@/components/page_structure/header";
import Sidebar from "@/components/page_structure/sidebar";
import Main from "@/components/page_structure/main";
import TableOfContents, {
  outlined_heading,
} from "@/components/page_structure/table_of_contents";

import "@/styles/shared.css";
import "@/styles/app/shared.css";
import "@/styles/app/homepage.css";

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

let homepage_links: block_of_links[] = [
  {
    blockTitle: "Internal",
    describedLinks: [
      {
        id: "0",
        name: "example",
        linked: "./example",
        display: "Example Link",
        description: "A Simple Example Link for testing",
      },
    ],
  },
  {
    blockTitle: "External",
    describedLinks: [
      {
        id: "0",
        name: "example2",
        linked: "./example/second",
        display: "Example Link 2",
        description: "A Simple Example Link for testing more things",
      },
      {
        id: "1",
        name: "another example",
        linked: "./example/second/#more",
        display: "Example Link 3",
        description: "A Simple Example Link",
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
      <HomePageWelcomeSplashSection />
      <HomePageLinksSection />
      <HomePageSummeryBlock />
      <HomePageArtGalleryBlock />
    </Main>
  );
}

function HomePageWelcomeSplashSection() {
  return (
    <Section
      sectionTitle={"Welcome"}
      sectionId="greating"
    >
      <p>Welcome to my site</p>
      <p>Some more info</p>
    </Section>
  );
}
function HomePageLinksSection() {
  return (
    <Section
      sectionTitle={"Links"}
      sectionId="links"
    >
      {homepage_links.map((homepage_link_block, index) => (
        <LinkBLock
          key={
            index.toString() +
            "-" +
            homepage_link_block.blockTitle.toLowerCase()
          }
          {...homepage_link_block}
        />
      ))}
    </Section>
  );
}

function HomePageSummeryBlock() {
  return (
    <ParagraphBlock>
      <p>Some content served.</p>
      <p>
        This can have links to other parts of the page (or other sites), other
        projects or ideas, or anything I want ot put here.
      </p>
      <p>
        test: <a href="./index.html">link testing (back to here)</a>
      </p>
    </ParagraphBlock>
  );
}

function HomePageArtGalleryBlock() {
  return (
    <Gallery>
      <GalleryItem>
        <p>Example One</p>
      </GalleryItem>
      <GalleryItem>
        {
          <img
            width="100"
            height="100"
            src={"./example_two.jpeg"}
          />
        }
      </GalleryItem>
    </Gallery>
  );
}

function HomePageFooter() {
  return <Footer>Created by Librarian of Stars</Footer>;
}
