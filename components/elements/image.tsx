import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/image.css";

import { render_if_valid_data } from "@/schema/validation";

export interface image {
  source: string;
  size: { width: number; height?: number };
  className?: string;
}

export default function Image({ data }: { data: image }) {
  return render_if_valid_data(
    "https://librarianofstars.ca/schema/components/elements/image.json",
    data,
    <img
      width={data.size.width}
      height={data.size.height || data.size.width} // fallback to square
      src={data.source}
      className={"icon " + data.className}
    />,
  );
}
