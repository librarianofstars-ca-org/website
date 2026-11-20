import { ReactNode } from "react";

import Heading from "@/components/elements/heading";
import Seperator from "@/components/elements/seperator";
import { footer_section_contents } from "@/components/page_structure/footer";

import { to_key_index_name } from "@/utilities/key_mapping";

export default function FooterBlock({
  title,
  contents,
}: {
  title: string;
  contents: footer_section_contents;
}) {
  return (
    <div className="footer-section">
      <Heading
        level={4}
        key={"title"}
        contents={title}
      />
      <dl>
        {contents.map(({ type, content }, index) => (
          <div
            key={to_key_index_name(index, "section")}
            className="footer-contents-wrapper"
          >
            <Seperator
              isVertical={false}
              className={"footer-contents"}
            />
            <dt key={index}>{type}</dt>
            {content.map((content: ReactNode, index: number) => (
              <dd key={index}>{content}</dd>
            ))}
          </div>
        ))}
      </dl>
    </div>
  );
}
