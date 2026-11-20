import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/header.css";

import Seperator from "@/components/elements/seperator";

import NavigationBar, {
  navlinks,
} from "@/components/elements/structure/navbar";
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
      <Seperator
        isVertical={false}
        className="header"
      />
      <IdentifiedHeading
        headingId="#home"
        className="page-title"
        contents={"Librarian Of Stars' Homepage!"}
        level={1}
      />
    </div>
  );
}
