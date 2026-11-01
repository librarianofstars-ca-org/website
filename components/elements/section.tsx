import "@/styles/components/content_blocks/shared.css";
import "@/styles/components/content_blocks/section.css";

import { IdentifiedHeading } from "@/components/elements/heading";
import { ReactElement } from "react";

export type section_data = {
  heading: string;
  heading_id: string;
  contents: ReactElement[];
};

export default function Section({
  heading,
  heading_id,
  contents,
}: section_data) {
  return (
    <div className="section wrapper">
      <IdentifiedHeading
        className="section title"
        headingId={heading_id}
        contents={heading}
        level={2}
      ></IdentifiedHeading>
      <div className="section content">{contents}</div>
    </div>
  );
}
