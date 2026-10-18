import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/navbar.css";

import Seperator from "@/components/page_structure/seperator";

import Link from "next/link";

export default function NavigationBar({
  links,
}: {
  links: [
    ...{
      id: string;
      linked: string;
      display: string;
    }[],
  ];
}) {
  return (
    <nav>
      {/* Icon / Logo */}
      <NavSeperator />
      <ol className="nav-bar-links">
        {links.map((link) => (
          <li
            key={link.id}
            className="nav-bar-link-item"
          >
            <Link
              href={link.linked}
              className="nav-link"
            >
              {link.display}
            </Link>
          </li>
        ))}
      </ol>
      <NavSeperator />
      {/* space */}
    </nav>
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
