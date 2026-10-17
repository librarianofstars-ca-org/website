import Footer from "@/components/page_structure/footer";
import Header from "@/components/page_structure/header";
import Sidebar from "@/components/page_structure/sidebar";
import Main from "@/components/page_structure/sidebar";

export default function RootPage() {
  return (
    <>
      <Header />
      <Sidebar>*table of contents*</Sidebar>
      <Main>
        <p>Some content served.</p>
        <p>
          This can have links to other parts of the page (or other sites), other
          projects or ideas, or anything I want ot put here.
        </p>
        <p>
          test: <a href="./index.html">link testing (back to here)</a>
        </p>
      </Main>
      <Footer>Created by Librarian of Stars</Footer>
    </>
  );
}
// <!-- TODO: Add divs and construct a simple page layout. -->
// <!-- - Link/Nav header (or sidebar) -->
// <!-- - main body of page -->
// <!-- - header structure, maybe diferent sections (about me, account links, more.) -->
