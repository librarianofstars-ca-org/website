import "@/styles/components/blocks/shared.css";
import "@/styles/components/blocks/paragraph_block.css";

// import Seperator from "@/components/elements/seperator";

import {BlockWraper, block_data } from "@/components/blocks/generic_block";

export interface paragraph_data {
  id: { index: number; name: string };
  contents: string | boolean;
}

export interface paragraph_block extends block_data {
  contents: paragraph_data[];
}

// import schema from "@/schema/components/blocks/paragraph.json";
import { ErrorData, validate_against_schema } from "@/schema/validation";
import { to_key } from "@/utilities/key_mapping";

export default function ParagraphBlock({ data }: { data: paragraph_block }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/blocks/paragraph.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <BlockWraper
      type={"paragraph"}
      key={to_key(data.id)}
    >
      {data.contents.map((paragraph) => (
        <ParagraphElement
          key={to_key(paragraph.id)}
          data={paragraph}
        />
      ))}
    </BlockWraper>
  );
}
export function ParagraphElement({ data }: { data: paragraph_data }) {
  if (data.contents) {
    return <p>{data.contents}</p>;
  } else {
    return <p className="break-line paragraph-block empty" />;
  }
}
