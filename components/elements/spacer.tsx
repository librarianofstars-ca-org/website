import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/spacer.css";
import { ErrorData, validate_against_schema } from "@/schema/validation";

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
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/elements/spacer.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return <div className={(data.className || "") + " spacer " + data.size} />;
}
