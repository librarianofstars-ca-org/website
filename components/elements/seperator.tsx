import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/seperator.css";
import { ErrorData, validate_against_schema } from "@/schema/validation";

export interface seperator {
  vertical: boolean;
  className?: string;
}

export default function Seperator({ data }: { data: seperator }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/elements/seperator.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <hr
      className={
        (data.className || "") +
        " page-seperator " +
        (data.vertical ? "vertical" : "horizontal")
      }
    />
  );
}
