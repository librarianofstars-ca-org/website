import { ReactNode } from "react";

import Heading from "@/components/elements/heading";
import Seperator from "@/components/elements/seperator";

import "@/styles/components/elements/structure/footer_section.css";

import { to_key } from "@/utilities/key_mapping";

export interface footer_section_item {
  id: { index: number; name: string };
  title: string;
  contents: ReactNode[];
}

export interface footer_section {
  id: { index: number; name: string };
  title: string;
  contents: footer_section_item[];
}

export default function FooterSection({ id, title, contents }: footer_section) {
  return (
    <div
      className="footer-section"
      key={to_key(id)}
    >
      <Heading
        level={4}
        contents={title}
      />
      <dl>
        {contents.map(({ id, title, contents }, index) => (
          <div
            key={to_key(id)}
            className="footer-contents-wrapper"
          >
            <Seperator
              isVertical={false}
              className={"footer-contents"}
            />
            <dt key={index}>{title}</dt>
            {contents.map((content: ReactNode, index: number) => (
              <dd key={index}>{content}</dd>
            ))}
          </div>
        ))}
      </dl>
    </div>
  );
}
