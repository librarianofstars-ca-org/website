import { ReactNode } from "react";

import Heading from "@/components/elements/heading";
import Seperator from "@/components/elements/seperator";

import "@/styles/components/elements/structure/footer_section.css";

import { to_key } from "@/utilities/key_mapping";
import { ErrorData, validate_against_schema } from "@/schema/validation";

export interface footer_section_item {
  id: { index: number; name: string };
  title: string;
  contents: string[]; //ReactNode[];
}

export interface footer_section {
  id: { index: number; name: string };
  title: string;
  contents: footer_section_item[];
}

export default function FooterSection({ data }: { data: footer_section }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/elements/structure/footer_section.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <div
      className="footer-section"
      key={to_key(data.id)}
    >
      <Heading
        level={4}
        contents={data.title}
      />
      <dl>
        {data.contents.map((item, index) => (
          <div
            key={to_key(item.id)}
            className="footer-contents-wrapper"
          >
            <Seperator
              isVertical={false}
              className={"footer-contents"}
            />
            <dt key={index}>{item.title}</dt>
            {item.contents.map((content: ReactNode, index: number) => (
              <dd key={index}>{content}</dd>
            ))}
          </div>
        ))}
      </dl>
    </div>
  );
}
