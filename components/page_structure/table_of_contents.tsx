import "@/styles/components/shared.css";
import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/table_of_contents.css";

import { LinkedHeading } from "@/components/elements/heading";

export type outlined_heading = {
  order: number;
  linked_id: string;
  header: string;
  type: number;
};

export default function TableOfContents({
  contents_headers,
}: {
  contents_headers: outlined_heading[];
}) {
  return (
    <div className="table-of-contents">
      <TOCPlace place="start" />
      {contents_headers.map((content_header) => (
        <LinkedHeading
          key={content_header.order.toString() + "-order"}
          link={content_header.linked_id}
          contents={content_header.header}
          level={content_header.type + 1}
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
