import Body, { body } from "@/components/meta/body";
import { Head, head } from "@/components/meta/head";

import { ErrorData, validate_against_schema } from "@/schema/validation";

export interface page {
  head: head;
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
  return (
    <html
      lang="en"
      className="style-root"
    >
      <Head data={data.head} />
      <Body data={data.body} />
    </html>
  );
}
