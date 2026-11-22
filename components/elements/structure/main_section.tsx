import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/structure/main_section.css";

import Heading, { heading } from "@/components/elements/heading";

import GenericBlock, { block } from "@/components/blocks/generic_block";
import Seperator from "@/components/elements/seperator";
import { keyed_list, to_key } from "@/utilities/key_mapping";
import { validate_against_schema, ErrorData } from "@/schema/validation";

export type section_content = main_section | block;

export interface main_section extends keyed_list {
  section_title: heading;
  contents: section_content[];
}

export default function MainSection({ data }: { data: main_section }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/elements/structure/main_section.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <div
      className="section"
      key={to_key(data.id)}
    >
      {data.section_title.level <= 3 && (
        <Seperator data={{ className: "section-start", vertical: false }} />
      )}
      <Heading
        data={{ ...data.section_title, className: "main-section-title" }}
      />
      {data.contents.map((section_content_item) => {
        // is this a section (only sections have headings) (or is it a block)
        if (
          (section_content_item as main_section).section_title !== undefined
        ) {
          // Must be section
          return (
            <MainSection
              key={to_key(section_content_item.id)}
              data={section_content_item as main_section}
            />
          );
        } else {
          // Must be block
          return (
            <GenericBlock
              key={to_key(section_content_item.id)}
              data={section_content_item as block}
            />
          );
        }
      })}
    </div>
  );
}
