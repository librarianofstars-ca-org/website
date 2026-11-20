import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/sidebar.css";

import Seperator from "@/components/elements/seperator";
import TableOfContents, {
  table_of_contents,
} from "@/components/elements/structure/table_of_contents";
import { to_key } from "@/utilities/key_mapping";

export interface sidebar_section {
  id: { index: number; name: string };
  section_type: string;
  contents: table_of_contents; // | other sections
}

export type sidebar = sidebar_section[];

export default function Sidebar({ data }: { data: sidebar }) {
  return (
    <div className="sidebar wraper">
      <Seperator
        isVertical={true}
        className="sidebar left"
      />
      <div className="sidebar contents">
        {data.map((sidebar_section) => {
          switch (sidebar_section.section_type) {
            case "TOC":
              return (
                <TableOfContents
                  key={to_key(sidebar_section.id)}
                  data={sidebar_section.contents}
                />
              );
            default:
              return (
                <span className="error">
                  Could not find sidebar section type
                  {sidebar_section.section_type}
                </span>
              );
          }
        })}
      </div>
      <Seperator
        isVertical={true}
        className="sidebar right"
      />
    </div>
  );
}
