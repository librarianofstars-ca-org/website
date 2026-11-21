import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/structure/section.css";

import Heading, { heading } from "@/components/elements/heading";

import GenericBlock, { block } from "@/components/blocks/generic_block";
import Seperator from "@/components/elements/seperator";
import { keyed_list, to_key } from "@/utilities/key_mapping";
import { validate_against_schema, ErrorData } from "@/schema/validation";

export type section_content = section | block;

export interface section extends keyed_list {
  id: { index: number; name: string };
  heading: heading;
  contents: section_content[];
}

export default function Section({ data }: { data: section }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/elements/structure/section.json",
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
      {data.heading.level <= 3 && (
        <Seperator
          className={"section-start"}
          isVertical={false}
        />
      )}
      <Heading data={{ ...data.heading, className: "section-title" }} />
      {data.contents.map((section_content_item) => {
        // is this a section (only sections have headings) (or is it a block)
        if ((section_content_item as section).heading !== undefined) {
          // Must be section
          return (
            <Section
              key={to_key(section_content_item.id)}
              data={section_content_item as section}
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
