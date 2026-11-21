import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/icon.css";

import Image, { image } from "@/components/elements/image";
import { validate_against_schema, ErrorData } from "@/schema/validation";

export interface icon {
  display: image;
  shape: "circle" | "square" | "rect";
  className?: string;
}

export default function Icon({ data }: { data: icon }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/elements/icon.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <Image
      data={{
        ...data.display,
        className: (data.className ? data.className : "") + " " + data.shape,
      }}
    />
  );
}
