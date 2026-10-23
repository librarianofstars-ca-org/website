import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/heading.css";

import Link from "next/link";
import React from "react";

let level_map: { [id: number]: string } = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
  7: "small",
};

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
  // Means: <level_map[level] className={ className } id={ id }> {contents} </level_map[level]>
  return React.createElement(
    level_map[level],
    { className: className, id: id },
    contents,
  );
}

export function IdentifiedHeading({ headingId, ...props }) {
  return (
    <Heading
      id={headingId}
      contents={props.contents}
      level={props.level}
      className={props.className}
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
