import "@/styles/components/shared.css";
import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/header.css";

import Seperator from "@/components/page_structure/seperator";

import NavigationBar from "./nav_bar";

export default function Header(props) {
  return (
    <div className="header">
      <NavigationBar
        links={[
          { id: "0", linked: "./", display: "example" },
          { id: "1", linked: "./about", display: "About Me!" },
        ]}
      />
      <PageTitle>Librarian Of Stars' Homepage!</PageTitle>
      <HeaderSeperator />
    </div>
  );
}

export function PageTitle({ children }) {
  return <h1 className="page-title">{children}</h1>;
}

export function HeaderSeperator() {
  return (
    <Seperator
      isVertical={false}
      className="header"
    />
  );
}
