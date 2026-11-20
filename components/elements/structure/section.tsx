import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/structure/section.css";

import Heading, { heading } from "@/components/elements/heading";
import { ReactElement } from "react";

import { block } from "@/components/blocks/generic_block";
import Seperator from "@/components/elements/seperator";
import { to_key } from "@/utilities/key_mapping";

export type section_content = ReactElement<typeof Section> | block;

export type section = {
  id: { index: number; name: string };
  heading: heading;
  contents: section_content[];
};

export type sections = ReactElement<typeof Section>[];

export default function Section({ data }: { data: section }) {
  return (
    <div
      className="section"
      key={to_key(data.id)}
    >
      {data.heading.level <= 3 && (
        <Seperator
          className={"section-start"}
          isVertical={false}
        />
      )}
      <Heading data={{ ...data.heading, className: "section-title" }} />
      {data.contents}
    </div>
  );
}
