import { ReactNode } from "react";

import Heading, { heading } from "@/components/elements/heading";
import Seperator from "@/components/elements/seperator";

import "@/styles/components/elements/structure/footer_section.css";

import { keyed_list, to_key } from "@/utilities/key_mapping";

import { render_if_valid_data } from "@/schema/validation";

export interface footer_section_item extends keyed_list {
  title: string;
  contents: string[]; //ReactNode[];
}

export interface footer_section extends keyed_list {
  section_title: heading;
  contents: footer_section_item[];
}

export default function FooterSection({ data }: { data: footer_section }) {
  return render_if_valid_data(
    "https://librarianofstars.ca/schema/components/elements/structure/footer_section.json",
    data,
    <>
      {data.id.index > 1 && (
        <Seperator data={{ vertical: true, className: "footer" }} />
      )}
      <div
        className="footer-section"
        key={to_key(data.id)}
      >
        <Heading
          data={{ ...data.section_title, className: "footer-section-title" }}
        />
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
    </>,
  );
}
