import "@/styles/components/shared.css";
import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/footer.css";

import FooterBlock from "@/components/elements/structure/footer_list";

import { to_key_index_name } from "@/utilities/key_mapping";
import { ReactNode } from "react";

export type footer_section_content = { type: string; content: ReactNode[] };
export type footer_section_contents = footer_section_content[];

export type footer_section = {
  order: number;
  title: string;
  contents: footer_section_contents;
};
export type footer_sections = footer_section[];

export default function Footer({ sections }: { sections: footer_sections }) {
  return (
    <>
      <div className="footer">
        {sections.map((section: footer_section, index: number) => (
          <div
            className="footer-section-wrapper"
            key={to_key_index_name(section.order, section.title)}
          >
            {index != 0 && <hr className="page-seperator vertical footer" />}
            <FooterBlock
              title={section.title}
              contents={section.contents}
            />
          </div>
        ))}
      </div>
    </>
  );
}
