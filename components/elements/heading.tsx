import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/heading.css";

import { JSX } from "react/jsx-runtime";
import Link from "next/link";

export default function Heading({
  contents,
  level,
  className,
  id,
}: {
  contents: string;
  level: number;
  className?: string;
  id?: string;
}) {
  let display_heading: JSX.Element;
  switch (level) {
    case 1:
      display_heading = (
        <h1
          className={className}
          id={id}
        >
          {contents}
        </h1>
      );
      break;
    case 2:
      display_heading = (
        <h2
          className={className}
          id={id}
        >
          {contents}
        </h2>
      );
      break;
    case 3:
      display_heading = (
        <h3
          className={className}
          id={id}
        >
          {contents}
        </h3>
      );
      break;
    case 4:
      display_heading = (
        <h4
          className={className}
          id={id}
        >
          {contents}
        </h4>
      );
      break;
    case 5:
      display_heading = (
        <h5
          className={className}
          id={id}
        >
          {contents}
        </h5>
      );
      break;
    case 6:
      display_heading = (
        <h6
          className={className}
          id={id}
        >
          {contents}
        </h6>
      );
      break;
    case 7:
      display_heading = (
        <small
          className={className}
          id={id}
        >
          {contents}
        </small>
      );
      break;
    default:
      display_heading = (
        <p
          className={className}
          id={id}
        >
          Error: Not Correct Type in Heading "{level}"
        </p>
      );
      break;
  }

  return display_heading;
}

export function IdentifiedHeading({ headingId, ...props }) {
  return (
    <Heading
      id={headingId}
      contents={props.contents}
      level={props.level}
      {...props}
    />
  );
}

export function LinkedHeading({ link, ...props }) {
  return (
    <Link
      href={"/" + link}
      key={link}
      replace
      scroll={false}
    >
      <Heading
        contents={props.contents}
        level={props.level}
        {...props}
      />
    </Link>
  );
}
