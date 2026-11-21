import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/structure/navbar.css";

import Seperator from "@/components/elements/seperator";

import Link from "next/link";
import Icon, { icon } from "@/components/elements/icon";
import { validate_against_schema, ErrorData } from "@/schema/validation";

export type navlink = { id: string; linked: string; display: string };

export interface navbar {
  icon: icon;
  links: navlink[];
}

export default function NavigationBar({ data }: { data: navbar }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/elements/structure/navbar.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <nav>
      <Icon
        data={{
          ...data.icon,
          className: "nav-bar-icon" + (data.icon.className || ""),
        }}
      />
      <NavSeperator />
      <NavLinks>
        {data.links.map((link) => (
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
