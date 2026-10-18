import "@/styles/components/shared.css";

import { JSX } from "react/jsx-runtime";

export default function ParagraphBlock(
  { children },
  // : {
  // children: [...JSX.IntrinsicElements["p"][]];
  // Any amount of only paragraphs
  // }
) {
  return (
    <div className="paragraph-block">
      {children}
      <hr className="seperator end-paragraph-block" />
    </div>
  );
}
