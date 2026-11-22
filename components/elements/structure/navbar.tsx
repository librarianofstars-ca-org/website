import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/structure/navbar.css";

import Seperator, { seperator } from "@/components/elements/seperator";

import Link from "next/link";
import Icon, { icon } from "@/components/elements/icon";
import Spacer, { spacer } from "@/components/elements/spacer";

import { validate_against_schema, ErrorData } from "@/schema/validation";
import { keyed_list, to_key } from "@/utilities/key_mapping";

export interface navlink {
  id: string;
  linked: string;
  display: string;
}

export interface navbar_item extends keyed_list {
  item_type: "icon" | "link" | "spacer" | "seperator";
  contents: icon | navlink | spacer | seperator;
}

export interface navbar {
  contents: navbar_item[];
}

export default function NavBar({ data }: { data: navbar }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/elements/structure/navbar.json",
      data,
    )
  ) {
    // console.log(ajv_instance.errors);
    return <ErrorData data={data} />;
  }
  return (
    <nav>
      <ul className="nav-bar-items">
        {data.contents.map((item) => {
          switch (item.item_type) {
            case "icon":
              return (
                <Icon
                  key={to_key(item.id)}
                  data={item.contents as icon}
                />
              );
            case "spacer":
              return (
                <Spacer
                  key={to_key(item.id)}
                  data={item.contents as spacer}
                />
              );
            case "link":
              return (
                <NavLink
                  key={to_key(item.id)}
                  data={item.contents as navlink}
                />
              );
            case "seperator":
              return (
                <Seperator
                  key={to_key(item.id)}
                  data={item.contents as seperator}
                />
              );
          }
        })}
      </ul>
    </nav>
  );
}

export function NavLink({ data }: { data: navlink }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/elements/structure/navbar.json#/$defs/nav_link",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <li
      className="nav-bar"
      key={data.id}
    >
      <Link
        href={data.linked}
        className="navigation"
      >
        {data.display}
      </Link>
    </li>
  );
}
