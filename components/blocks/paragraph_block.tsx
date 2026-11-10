import "@/styles/components/blocks/shared.css";
import "@/styles/components/blocks/paragraph_block.css";

// import Seperator from "@/components/elements/seperator";

import Block from "@/components/blocks/generic_block";

export interface paragraph_data {
  id: { index: number; name: string };
  contents: string | boolean;
}

export interface paragraph_block {
  id: { index: number; name: string };
  contents: paragraph_data[];
}

// import schema from "@/schema/components/blocks/paragraph.json";
import { validate_against_schema } from "@/schema/validation";
import { to_key } from "@/utilities/key_mapping";

export default function ParagraphBlock({ data }: { data: paragraph_block }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/blocks/paragraph.json",
      data,
    )
  ) {
    return (
      <span className="error">
        Invalid paragraph data: {JSON.stringify(data)}
      </span>
    );
  }
  return (
    <Block
      type={"paragraph"}
      key={to_key(data.id)}
    >
      {data.contents.map((paragraph) => (
        <ParagraphElement
          key={to_key(paragraph.id)}
          data={paragraph}
        />
      ))}
    </Block>
  );
}
export function ParagraphElement({ data }: { data: paragraph_data }) {
  if (data.contents) {
    return <p>{data.contents}</p>;
  } else {
    return <p className="break-line paragraph-block empty" />;
  }
}
