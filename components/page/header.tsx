import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/header.css";

import {  to_key } from "@/utilities/key_mapping";

import { validate_against_schema, ErrorData } from "@/schema/validation";

import HeaderSection, { header_section } from "../elements/structure/header_section";

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
        return (
          <HeaderSection
            key={to_key(section.id)}
            data={section}
          />
        );
      })}
    </div>
  );
}
