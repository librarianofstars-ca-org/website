import "@/styles/components/shared.css";
import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/table_of_contents.css";

type header = { header: string; type: number };

export default function TableOfContents({
  contents_headers,
}: {
  contents_headers: header[];
}) {
  return (
    <>
      {contents_headers.map((content_header) => (
        <TableOfContentsItem content_header={content_header} />
      ))}
    </>
  );
}

export function TableOfContentsItem({
  content_header,
}: {
  content_header: header;
}) {
  switch (content_header.type) {
    case 2:
      return <h2>{content_header.header}</h2>;
    case 3:
      return <h3>{content_header.header}</h3>;
    case 4:
      return <h4>{content_header.header}</h4>;
    case 5:
      return <h5>{content_header.header}</h5>;
    case 6:
      return <h6>{content_header.header}</h6>;
  }
}
