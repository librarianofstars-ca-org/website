import "@/styles/components/shared.css";
import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/table_of_contents.css";

import Heading from "@/components/elements/heading";

export type outlined_heading = { order: number; header: string; type: number };

export default function TableOfContents({
  contents_headers,
}: {
  contents_headers: outlined_heading[];
}) {
  return (
    <div className="table-of-contents">
      {contents_headers.map((content_header) => (
        <Heading
          key={content_header.order}
          contents={content_header.header}
          level={content_header.type + 1}
        />
      ))}
    </div>
  );
}
