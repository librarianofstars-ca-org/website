import "@/styles/components/shared.css";

import { JSX } from "react/jsx-runtime";
import Seperator from "@/components/page_structure/seperator";

export type content_element = { index: number; show: string };
export type content_elements = content_element[];

export default function ParagraphBlock({
  contents,
}: {
  contents: content_elements;
}) {
  return (
    <div className="paragraph-block">
      <Seperator
        isVertical={false}
        className=" start-paragraph-block"
      />
      {contents.map((element) => (
        <p key={element.index}> {element.show} </p>
      ))}
      <Seperator
        isVertical={false}
        className=" end-paragraph-block"
      />
    </div>
  );
}
