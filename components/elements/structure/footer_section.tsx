import { ReactNode } from "react";

import Heading from "@/components/elements/heading";
import Seperator from "@/components/elements/seperator";

import "@/styles/components/elements/structure/footer_section.css";

import { keyed_list, to_key } from "@/utilities/key_mapping";
import { ErrorData, validate_against_schema } from "@/schema/validation";

export interface footer_section_item extends keyed_list {
  title: string;
  contents: string[]; //ReactNode[];
}

export interface footer_section extends keyed_list {
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
      <Heading data={{ level: 4, contents: data.title }} />
      <dl>
        {data.contents.map((item, index) => (
          <div
            key={to_key(item.id)}
            className="footer-contents-wrapper"
          >
            <Seperator
              data={{ vertical: false, className: "footer-contents" }}
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
