import "@/styles/shared.css";
import "@/styles/pallette.css";
import "@/styles/base.css";
import "@/styles/app/shared.css";

import Body, { body } from "@/components/meta/body";
import { Head, head } from "@/components/meta/head";

import { render_if_valid_data } from "@/schema/validation";
export interface page {
  head: head;
  body: body;
}

export default function Page({ data }: { data: page }) {
  return render_if_valid_data(
    "https://librarianofstars.ca/schema/components/meta/page.json",
    data,
    <html
      lang={data.head.language || "en"}
      className="style-root"
    >
      <Head data={data.head} />
      <Body data={data.body} />
    </html>,
  );
}
