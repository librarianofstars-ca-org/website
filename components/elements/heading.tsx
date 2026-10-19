import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/heading.css";

import { JSX } from "react/jsx-runtime";

export default function Heading({
  contents,
  level,
  className,
}: {
  contents: string;
  level: number;
  className?: string;
}) {
  let display_heading: JSX.Element;
  switch (level) {
    case 1:
      display_heading = <h1 className={className}>{contents}</h1>;
      break;
    case 2:
      display_heading = <h2 className={className}>{contents}</h2>;
      break;
    case 3:
      display_heading = <h3 className={className}>{contents}</h3>;
      break;
    case 4:
      display_heading = <h4 className={className}>{contents}</h4>;
      break;
    case 5:
      display_heading = <h5 className={className}>{contents}</h5>;
      break;
    case 6:
      display_heading = <h6 className={className}>{contents}</h6>;
      break;
    case 7:
      display_heading = <small className={className}>{contents}</small>;
      break;
  }
  return display_heading;
}
