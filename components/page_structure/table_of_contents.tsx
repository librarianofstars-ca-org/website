import "@/styles/components/shared.css";
import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/table_of_contents.css";
import { JSX } from "react/jsx-runtime";

export type header = { order: number; header: string; type: number };

export default function TableOfContents({
  contents_headers,
}: {
  contents_headers: header[];
}) {
  return (
    <>
      <h2>Table Of Contents</h2>
      {contents_headers.map((content_header) => (
        <TableOfContentsItem
          key={content_header.order}
          content_header={content_header}
        />
      ))}
    </>
  );
}

export function TableOfContentsItem({
  content_header,
}: {
  content_header: header;
}) {
  let display_header: JSX.Element;
  switch (content_header.type) {
    case 2:
      display_header = <h2>{content_header.header}</h2>;
      break;
    case 3:
      display_header = <h3>{content_header.header}</h3>;
      break;
    case 4:
      display_header = <h4>{content_header.header}</h4>;
      break;
    case 5:
      display_header = <h5>{content_header.header}</h5>;
      break;
    case 6:
      display_header = <h6>{content_header.header}</h6>;
      break;
  }
  return display_header;
}
