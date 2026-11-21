import Body, { body } from "@/components/meta/body";
import { ErrorData, validate_against_schema } from "@/schema/validation";

export interface page {
  body: body;
}

export default function Page({ data }: { data: page }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/meta/page.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return <Body data={data.body} />;
}
