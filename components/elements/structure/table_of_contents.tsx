import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/structure/table_of_contents.css";

import { LinkedHeading } from "@/components/elements/heading";

export interface outlined_heading {
  order: number;
  link: string;
  display: string;
  level: number;
}

export type table_of_contents = outlined_heading[];

export default function TableOfContents({ data }: { data: table_of_contents }) {
  return (
    <div className="table-of-contents">
      <TOCPlace place="start" />
      {data.map((outline_item) => (
        <LinkedHeading
          key={outline_item.order.toString() + "-order"}
          link={outline_item.link}
          contents={outline_item.display}
          level={outline_item.level + 1}
          className="toc-item"
        />
      ))}
      <TOCPlace place="end" />
    </div>
  );
}

export function TOCPlace({ place }: { place: string }) {
  switch (place) {
    case "start":
      return (
        <LinkedHeading
          key={"start"}
          link={"#page-start"}
          contents={"Start Of Page"}
          level={7}
          className="toc-place"
        />
      );
    case "end":
      return (
        <LinkedHeading
          key={"end"}
          link={"#page-end"}
          contents={"End Of Page"}
          level={7}
          className="toc-place"
        />
      );
  }
}
