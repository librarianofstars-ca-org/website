import Gallery, { GalleryItem } from "@/components/content_blocks/gallery";
import ParagraphBlock from "@/components/content_blocks/paragraph_block";
import Section from "@/components/content_blocks/section";

import Footer from "@/components/page_structure/footer";
import Header from "@/components/page_structure/header";
import Sidebar from "@/components/page_structure/sidebar";
import Main from "@/components/page_structure/main";

import "@/styles/shared.css";
import "@/styles/app/shared.css";
import "@/styles/app/homepage.css";

export default function RootPage() {
  return (
    <>
      <Header
        // specificNavLinks={[{ id: "3", linked: "./example", display: "test" }]}
      />
      <Sidebar>
        <h2>table of contents</h2>
        <h3>Welcome</h3>
        <h3>Links</h3>
        <h4>Internal</h4>
        <h4>External</h4>
        <h3>About Me</h3>
        <h4>Personal</h4>
        <h5>Pronouns</h5>
        <h6>Options</h6>
      </Sidebar>
      <Main>
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
        <Section sectionTitle={"Welcome"}>
          <p>Welcome to my site</p>
          <p>Some more info</p>
        </Section>
      </Main>
      <Footer>Created by Librarian of Stars</Footer>
    </>
  );
}
