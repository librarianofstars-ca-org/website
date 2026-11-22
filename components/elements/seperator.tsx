import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/seperator.css";

import { render_if_valid_data } from "@/schema/validation";

export interface seperator {
  vertical: boolean;
  className?: string;
}

export default function Seperator({ data }: { data: seperator }) {
  return render_if_valid_data(
    "https://librarianofstars.ca/schema/components/elements/seperator.json",
    data,
    <hr
      className={
        (data.className || "") +
        " page-seperator " +
        (data.vertical ? "vertical" : "horizontal")
      }
    />,
  );
}
