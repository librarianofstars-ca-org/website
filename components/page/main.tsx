import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/main.css";

import Section, { section } from "@/components/elements/structure/section";
import { to_key } from "@/utilities/key_mapping";
import { validate_against_schema, ErrorData } from "@/schema/validation";

export interface main {
  main_section_data: section[];
}

export default function Main({ data }: { data: main }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/page/main.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <div className="main-body">
      {data.main_section_data.map((section) => {
        return (
          <Section
            key={to_key(section.id)}
            data={section}
          />
        );
      })}
    </div>
  );
}
