import "@/styles/components/blocks/shared.css";
import "@/styles/components/blocks/paragraph_block.css";

// import Seperator from "@/components/elements/seperator";

import Block from "@/components/blocks/generic_block";

export interface paragraph_data {
  id: { index: number; name: string };
  contents?: string;
  breakline?: boolean;
}

export interface paragraph_block {
  id: { index: number; name: string };
  contents: paragraph_data[];
}

// import schema from "@/schema/components/blocks/paragraph.json";
import { validate_against_schema } from "@/schema/validation";
import { to_key } from "@/utilities/key_mapping";

export default function ParagraphBlock({ id, contents }: paragraph_block) {
  // if (
  //   !validate_against_schema(
  //     "https://librarianofstars.ca/schema/components/blocks/paragraph.json",
  //     data,
  //   )
  // ) {
  //   return <span className="error">Invalid paragraph data</span>;
  // }
  return (
    <Block
      type={"paragraph"}
      key={to_key(id)}
    >
      {contents.map((paragraph) =>
        paragraph.breakline ? (
          <p
            key={to_key(paragraph.id)}
            className="break-line paragraph-block empty"
          />
        ) : (
          <p key={to_key(paragraph.id)}>{paragraph.contents}</p>
        ),
      )}
    </Block>
  );
}
