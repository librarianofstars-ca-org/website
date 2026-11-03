import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/section.css";

import {
  ident_heading_props,
  IdentifiedHeading,
} from "@/components/elements/heading";
import { ReactElement } from "react";

import { block } from "@/components/content_blocks/generic_block";
import Seperator from "@/components/elements/seperator";

export type section_content = ReactElement<typeof Section> | block;

export type section_data = {
  heading: ident_heading_props;
  contents: section_content[];
};

export type sections = ReactElement<typeof Section>[];

export default function Section({ heading, contents }: section_data) {
  return (
    <div className="section">
      {heading.level <= 3 && (
        <Seperator
          className={"section-start"}
          isVertical={false}
        />
      )}
      <IdentifiedHeading
        className="section-title"
        headingId={heading.id}
        contents={heading.contents}
        level={heading.level}
      />
      {/* <div className="section-contents"> */}
      {contents}
      {/* </div> */}
    </div>
  );
}
