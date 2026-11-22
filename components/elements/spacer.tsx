import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/spacer.css";

import { render_if_valid_data } from "@/schema/validation";

export interface spacer {
  size:
    | "tiny"
    | "extra_small"
    | "small"
    | "normal"
    | "large"
    | "extra_large"
    | "huge";
  className?: string;
}

export default function Spacer({ data }: { data: spacer }) {
  return render_if_valid_data(
    "https://librarianofstars.ca/schema/components/elements/spacer.json",
    data,
    <div className={data.size + " spacer " + (data.className || "")} />,
  );
}
