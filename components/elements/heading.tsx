import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/heading.css";

import Link from "next/link";
import React from "react";

const level_map: { [id: number]: string } = {
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

export interface heading {
  contents: string;
  level: number;
  className?: string;
  id?: string;
}

export default function Heading({ data, ...props }: { data: heading }) {
  // if (props.className){
  //   data = { ...data, className: data.className + props.className };
  // }
  data = { ...data, className: data.className + " heading" };
  // Means: <level_map[level] className={ className } id?={ id }> {contents} </level_map[level]>
  return React.createElement(getlevelstring(data.level), data, data.contents);
}

export function LinkedHeading({
  link,
  heading_data,
  ...props
}: {
  link: string;
  heading_data: heading;
}) {
  return (
    <Link
      href={"/" + link}
      key={link}
      replace
      scroll={false}
    >
      <Heading
        data={heading_data}
        {...props}
      />
    </Link>
  );
}
