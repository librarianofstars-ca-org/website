import "@/styles/components/shared.css";
import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/navbar.css";

import Seperator from "@/components/page_structure/seperator";

import Link from "next/link";
import Icon from "@/components/elements/icon";

export type navlink = { id: string; linked: string; display: string };
export type navlinks = Array<navlink>;

export default function NavigationBar({ links }: { links: navlinks }) {
  return (
    <nav>
      <Icon
        size={40}
        shape={"circle"}
        source={"./test.svg"}
        className="nav-bar-icon"
      />
      <NavSeperator />
      <NavSpacer />
      <NavLinks>
        {links.map((link) => (
          <NavLink
            key={link.id}
            linked={link.linked}
            display={link.display}
          />
        ))}
      </NavLinks>
      <NavSeperator />
      <NavSpacer />
    </nav>
  );
}

export function NavLinks({ children }) {
  return <ol className="nav-bar-links"> {children} </ol>;
}

export function NavLink({ linked, display }) {
  return (
    <li className="nav-bar-link-item">
      <Link
        href={linked}
        className="nav-link"
      >
        {display}
      </Link>
    </li>
  );
}

export function NavSeperator() {
  return (
    <Seperator
      isVertical={true}
      className="nav-bar-sep"
    />
  );
}

export function NavSpacer() {
  return <div className="nav-spacer" />;
}
