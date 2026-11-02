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

function getlevelstring(level: number) {
  if (level in level_map) {
    return level_map[level];
  } else return "p";
}

export interface heading_props {
  contents: string;
  level: number;
  className?: string;
}
export interface ident_heading_props extends heading_props {
  id: string;
}

function isIdentified(object: any): object is ident_heading_props {
  return "id" in object;
}

export default function Heading(props: ident_heading_props | heading_props) {
  if (isIdentified(props)) {
    // Could this be cleaner somehow?
    // Means: <level_map[level] className={ className } id={ id }> {contents} </level_map[level]>
    return React.createElement(
      getlevelstring(props.level),
      { className: props.className, id: props.id },
      props.contents,
    );
  } else {
    return React.createElement(
      getlevelstring(props.level),
      { className: props.className },
      props.contents,
    );
  }
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
