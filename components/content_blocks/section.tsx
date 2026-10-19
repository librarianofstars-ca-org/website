import "@/styles/components/content_blocks/shared.css";
import "@/styles/components/content_blocks/section.css";

import Heading from "@/components/elements/heading";

export default function Section({ sectionTitle, children }) {
  return (
    <div className="section wrapper">
      <Heading className="section title" contents={sectionTitle} level={2}></Heading>
      <div className="section content">{children}</div>
    </div>
  );
}
