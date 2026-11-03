import "@/styles/components/content_blocks/shared.css";
import "@/styles/components/content_blocks/paragraph_block.css";

// import Seperator from "@/components/elements/seperator";

import Block from "@/components/content_blocks/generic_block";

export type content_element = { index: number; show?: string; isBr?: boolean };
export type content_elements = content_element[];

export default function ParagraphBlock({
  contents,
}: {
  contents: content_elements;
}) {
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
