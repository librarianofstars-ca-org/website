import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/header.css";

import Seperator, { seperator } from "@/components/elements/seperator";

import NavBar, { navbar } from "@/components/elements/structure/navbar";
import Heading, { heading } from "@/components/elements/heading";
import { validate_against_schema, ErrorData } from "@/schema/validation";
import { keyed_list, to_key } from "@/utilities/key_mapping";

export interface header_section extends keyed_list {
  section_type: "navigation" | "seperator" | "page_title";
  contents: navbar | seperator | heading;
}

export interface header {
  sections: header_section[];
}

export default function Header({ data }: { data: header }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/page/header.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <div className="header">
      {data.sections.map((section) => {
        switch (section.section_type) {
          case "navigation":
            return (
              <NavBar
                key={to_key(section.id)}
                data={section.contents as navbar}
              />
            );
          case "seperator":
            return (
              <Seperator
                key={to_key(section.id)}
                data={section.contents as seperator}
              />
            );
          case "page_title":
            return (
              <Heading
                key={to_key(section.id)}
                data={section.contents as heading}
              />
            );
          default:
            return (
              <span
                key={to_key(section.id)}
                className="error"
              >
                {JSON.stringify(section)}
              </span>
            );
        }
      })}
    </div>
  );
}
