import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/structure/navbar.css";

import Seperator from "@/components/elements/seperator";

import Link from "next/link";
import Icon, { icon } from "@/components/elements/icon";
import Spacer from "@/components/elements/spacer";

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
      <Seperator data={{ vertical: true, className: "nav-bar-sep" }} />
      <NavLinks>
        {data.links.map((link) => (
          <NavLink
            key={link.id}
            linked={link.linked}
            display={link.display}
          />
        ))}
      </NavLinks>
      <Spacer data={{ size: "tiny", className: "nav" }} />
      <Seperator data={{ vertical: true, className: "nav-bar-sep" }} />
      <Spacer data={{ size: "large", className: "nav" }} />
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
