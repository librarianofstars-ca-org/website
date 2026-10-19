import Gallery, { GalleryItem } from "@/components/content_blocks/gallery";
import ParagraphBlock from "@/components/content_blocks/paragraph_block";
import LinkBLock from "@/components/content_blocks/link_block";
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
import { IdentifiedHeading } from "@/components/elements/heading";

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

export default function RootPage() {
  return (
    <>
      <IdentifiedHeading
        contents={"test"}
        level={7}
        className={"nav-id-hidden"}
        headingId={"page_start"}
      />
      <Header
      // specificNavLinks={[{ id: "3", linked: "./example", display: "test" }]}
      />
      <Sidebar>
        <TableOfContents contents_headers={outline} />
      </Sidebar>
      <Main>
        <Section
          sectionTitle={"Welcome"}
          sectionId="greating"
        >
          <p>Welcome to my site</p>
          <p>Some more info</p>
        </Section>
        <Section
          sectionTitle={"Links"}
          sectionId="links"
        >
          <LinkBLock
            blockTitle={"Internal"}
            describedLinks={[
              {
                id: "0",
                name: "example",
                linked: "./example",
                display: "Example Link",
                description: "A Simple Example Link for testing",
              },
            ]}
          />
          <LinkBLock
            blockTitle={"External"}
            describedLinks={[
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
            ]}
          />
        </Section>
        <ParagraphBlock>
          <p>Some content served.</p>
          <p>
            This can have links to other parts of the page (or other sites),
            other projects or ideas, or anything I want ot put here.
          </p>
          <p>
            test: <a href="./index.html">link testing (back to here)</a>
          </p>
        </ParagraphBlock>
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
      </Main>
      <Footer>Created by Librarian of Stars</Footer>
      <IdentifiedHeading
        contents={""}
        level={7}
        className={"nav-id-hidden"}
        headingId={"page_end"}
      />
    </>
  );
}
