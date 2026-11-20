import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/header.css";

import Seperator from "@/components/elements/seperator";

import NavigationBar, { navbar } from "@/components/elements/structure/navbar";
import { IdentifiedHeading } from "@/components/elements/heading";

export interface header {
  page_title: string;
  navigation: navbar;
}

export default function Header({ data }: { data: header }) {
  return (
    <div className="header">
      <NavigationBar data={data.navigation} />
      <Seperator
        isVertical={false}
        className="header"
      />
      <IdentifiedHeading
        headingId="#home"
        className="page-title"
        contents={data.page_title}
        level={1}
      />
    </div>
  );
}
