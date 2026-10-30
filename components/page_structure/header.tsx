import "@/styles/components/shared.css";
import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/header.css";

import Seperator from "@/components/page_structure/seperator";

import NavigationBar, { navlinks } from "@/components/elements/navbar";
import { IdentifiedHeading } from "@/components/elements/heading";

let defaultlinks: navlinks = Array(
  { id: "0", linked: "./", display: "example" },
  { id: "1", linked: "./about", display: "About Me!" },
);

export default function Header({
  specificNavLinks,
}: {
  specificNavLinks?: navlinks;
}) {
  let links: navlinks;
  if (specificNavLinks) {
    links = defaultlinks.concat(specificNavLinks);
  } else {
    links = defaultlinks;
  }
  return (
    <div className="header">
      <NavigationBar links={links} />
      <PageTitle>Librarian Of Stars' Homepage!</PageTitle>
      <HeaderSeperator />
    </div>
  );
}

export function PageTitle({ children }) {
  return (
    <IdentifiedHeading
      headingId="#home"
      className="page-title"
      contents={children}
      level={1}
    />
  );
}

export function HeaderSeperator() {
  return (
    <Seperator
      isVertical={false}
      className="header"
    />
  );
}
