import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/header.css";

import Seperator from "@/components/elements/seperator";

import NavigationBar, { navbar } from "@/components/elements/structure/navbar";
import Heading from "@/components/elements/heading";
import { validate_against_schema, ErrorData } from "@/schema/validation";

export interface header {
  page_title: string;
  navigation: navbar;
}

export default function Header({ data }: { data: header }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/page/header.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <div className="header">
      <NavigationBar data={data.navigation} />
      <Seperator data={{ vertical: false, className: "header" }} />
      <Heading
        data={{
          id: "#home",
          className: "page-title",
          contents: data.page_title,
          level: 1,
        }}
      />
    </div>
  );
}
