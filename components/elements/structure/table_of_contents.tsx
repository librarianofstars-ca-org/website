import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/structure/table_of_contents.css";

import { LinkedHeading } from "@/components/elements/heading";
import { validate_against_schema, ErrorData } from "@/schema/validation";

export interface outlined_heading {
  order: number;
  link: string;
  display: string;
  level: number;
}

export interface table_of_contents {
  places: boolean;
  contents: outlined_heading[];
}

export default function TableOfContents({ data }: { data: table_of_contents }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/elements/structure/table_of_contents.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <div className="table-of-contents">
      {!data.places || <TOCPlace place="start" />}
      {data.contents.map((outline_item) => (
        <LinkedHeading
          key={outline_item.order.toString() + "-order"}
          link={outline_item.link}
          heading_data={{
            contents: outline_item.display,
            level: outline_item.level + 1,
            className: "toc-item",
          }}
        />
      ))}
      {!data.places || <TOCPlace place="end" />}
    </div>
  );
}

const toc_place_data_default = {
  level: 7,
  className: "toc-place",
};

export function TOCPlace({ place }: { place: string }) {
  let place_id: string, place_data;
  switch (place) {
    case "start":
      place_id = "#page-start";
      place_data = { ...toc_place_data_default, contents: "Start Of Page" };
      break;
    case "end":
      place_id = "#page-end";
      place_data = { ...toc_place_data_default, contents: "End Of Page" };
      break;
    default:
      place_id = "#not-set-place-id";
      place_data = toc_place_data_default;
      break;
  }
  return (
    <LinkedHeading
      key={"end"}
      link={place_id}
      heading_data={place_data}
    />
  );
}
