import "@/styles/components/content_blocks/shared.css";
import "@/styles/components/content_blocks/section.css";

import {
  ident_heading_props,
  IdentifiedHeading,
} from "@/components/elements/heading";
import { ReactElement } from "react";

export type section_data = {
  heading: ident_heading_props;
  contents: ReactElement[];
};

export default function Section({ heading, contents }: section_data) {
  return (
    <div className="section wrapper">
      <IdentifiedHeading
        className="section title"
        headingId={heading.id}
        contents={heading.contents}
        level={heading.level}
      ></IdentifiedHeading>
      <div className="section content">{contents}</div>
    </div>
  );
}
