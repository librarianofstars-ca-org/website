import "@/styles/components/blocks/shared.css";
import "@/styles/components/blocks/paragraph_block.css";

// import Seperator from "@/components/elements/seperator";

import Block from "@/components/blocks/generic_block";

export type content_element = { index: number; show?: string; isBr?: boolean };
export type content_elements = content_element[];

// import schema from "@/schema/components/blocks/paragraph.json";
import { validate_against_schema } from "@/schema/validation";

export default function ParagraphBlock({
  contents,
}: {
  contents: content_elements;
}) {
  validate_against_schema(
    "https://librarianofstars.ca/schema/components/blocks/paragraph.json",
    contents,
  );
  return (
    <Block type={"paragraph"}>
      {/* <Seperator
        isVertical={false}
        className=" start-paragraph-block"
      /> */}
      {contents.map((element) =>
        element.isBr ? (
          <p
            key={element.index}
            className="break-line paragraph-block empty"
          />
        ) : (
          <p key={element.index}> {element.show} </p>
        ),
      )}
      {/* <Seperator
        isVertical={false}
        className=" end-paragraph-block"
      /> */}
    </Block>
  );
}
