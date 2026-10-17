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
      <br className="seperator end-paragraph-block" />
    </div>
  );
}
