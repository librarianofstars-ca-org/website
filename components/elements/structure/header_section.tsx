import Seperator, { seperator } from "@/components/elements/seperator";
import NavBar, { navbar } from "@/components/elements/structure/navbar";
import Heading, { heading } from "@/components/elements/heading";
import { keyed_list, to_key } from "@/utilities/key_mapping";
import { ErrorData, validate_against_schema } from "@/schema/validation";

export interface header_section extends keyed_list {
  section_type: "navigation" | "seperator" | "page_title";
  contents: navbar | seperator | heading;
}

export default function HeaderSection({ data }: { data: header_section }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/elements/structure/header_section.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  switch (data.section_type) {
    case "navigation":
      return (
        <NavBar
          key={to_key(data.id)}
          data={data.contents as navbar}
        />
      );
    case "seperator":
      return (
        <Seperator
          key={to_key(data.id)}
          data={data.contents as seperator}
        />
      );
    case "page_title":
      return (
        <Heading
          key={to_key(data.id)}
          data={data.contents as heading}
        />
      );
    default:
      return (
        <span
          key={to_key(data.id)}
          className="error"
        >
          {JSON.stringify(data)}
        </span>
      );
  }
}
