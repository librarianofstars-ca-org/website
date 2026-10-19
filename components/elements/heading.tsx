import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/heading.css";

import { JSX } from "react/jsx-runtime";

export default function Heading({
  contents,
  level,
}: {
  contents: string;
  level: number;
}) {
  let display_heading: JSX.Element;
  switch (level) {
    case 2:
      display_heading = <h2>{contents}</h2>;
      break;
    case 3:
      display_heading = <h3>{contents}</h3>;
      break;
    case 4:
      display_heading = <h4>{contents}</h4>;
      break;
    case 5:
      display_heading = <h5>{contents}</h5>;
      break;
    case 6:
      display_heading = <h6>{contents}</h6>;
      break;
    case 7:
      display_heading = <small>{contents}</small>;
      break;
  }
  return display_heading;
}
