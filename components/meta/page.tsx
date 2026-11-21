import Body, { body } from "@/components/meta/body";

export interface page {
  body: body;
}

export default function Page({ data }: { data: page }) {
  return <Body data={data.body} />;
}
