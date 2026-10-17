import Gallery, { GalleryItem } from "@/components/content_blocks/gallery";
import ParagraphBlock from "@/components/content_blocks/paragraph_block";
import Footer from "@/components/page_structure/footer";
import Header from "@/components/page_structure/header";
import Sidebar from "@/components/page_structure/sidebar";
import Main from "@/components/page_structure/sidebar";

import "@/styles/shared.css";
import "@/styles/app/homepage.css";

export default function RootPage() {
  return (
    <>
      <Header />
      <Sidebar>
        <p>*table of contents*</p>
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
      </Main>
      <Footer>Created by Librarian of Stars</Footer>
    </>
  );
}
// <!-- TODO: Add divs and construct a simple page layout. -->
// <!-- - Link/Nav header (or sidebar) -->
// <!-- - main body of page -->
// <!-- - header structure, maybe diferent sections (about me, account links, more.) -->
