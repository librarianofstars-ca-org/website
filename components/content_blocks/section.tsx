import "@/styles/components/content_blocks/shared.css";
import "@/styles/components/content_blocks/section.css";

import { IdentifiedHeading } from "@/components/elements/heading";

export default function Section({ sectionTitle, sectionId, children }) {
  return (
    <div className="section wrapper">
      <IdentifiedHeading
        className="section title"
        headingId={sectionId}
        contents={sectionTitle}
        level={2}
      ></IdentifiedHeading>
      <div className="section content">{children}</div>
    </div>
  );
}
