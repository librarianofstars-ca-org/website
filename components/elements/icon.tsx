import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/icon.css";

import Image, { image } from "@/components/elements/image";
import { render_if_valid_data } from "@/schema/validation";

export interface icon {
  display: image;
  shape: "circle" | "square" | "rect";
  className?: string;
}

export default function Icon({ data }: { data: icon }) {
  return render_if_valid_data(
    "https://librarianofstars.ca/schema/components/elements/icon.json",
    data,
    <Image
      data={{
        ...data.display,
        className: (data.className ? data.className : "") + " " + data.shape,
      }}
    />,
  );
}
