import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/sidebar.css";

import Seperator from "@/components/elements/seperator";

import { to_key } from "@/utilities/key_mapping";

import { render_if_valid_data } from "@/schema/validation";

import SidebarSection, {
  sidebar_section,
} from "@/components/elements/structure/sidebar_section";

export interface sidebar {
  lines: boolean;
  sections: sidebar_section[];
}

export default function Sidebar({ data }: { data: sidebar }) {
  return render_if_valid_data(
    "https://librarianofstars.ca/schema/components/page/sidebar.json",
    data,
    <div className="sidebar wraper">
      {!data.lines || (
        <Seperator data={{ vertical: true, className: "sidebar left" }} />
      )}
      <div className="sidebar contents">
        {data.sections.map((section) => {
          return (
            <SidebarSection
              key={to_key(section.id)}
              data={section}
            />
          );
        })}
      </div>
      {!data.lines || (
        <Seperator data={{ vertical: true, className: "sidebar left" }} />
      )}
    </div>,
  );
}
