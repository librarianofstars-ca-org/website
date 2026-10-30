import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/navbar.css";

import Seperator from "@/components/elements/seperator";

import Link from "next/link";
import Icon from "@/components/elements/icon";

export type navlink = { id: string; linked: string; display: string };
export type navlinks = Array<navlink>;

export default function NavigationBar({ links }: { links: navlinks }) {
  return (
    <nav>
      <Icon
        size={30}
        shape={"circle"}
        source={"./test.svg"}
        className="nav-bar-icon"
      />
      <NavSeperator />
      <NavLinks>
        {links.map((link) => (
          <NavLink
            key={link.id}
            linked={link.linked}
            display={link.display}
          />
        ))}
      </NavLinks>
      <NavSpacer length="tiny" />
      <NavSeperator />
      <NavSpacer length="large" />
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

export function NavSpacer({
  length = "normal",
}: {
  length?: "tiny" | "small" | "normal" | "large" | "huge";
}) {
  return <div className={"nav-spacer" + " " + length} />;
}
