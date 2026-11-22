import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/header.css";

import { to_key } from "@/utilities/key_mapping";

import { render_if_valid_data } from "@/schema/validation";

import HeaderSection, {
  header_section,
} from "../elements/structure/header_section";

export interface header {
  sections: header_section[];
}

export default function Header({ data }: { data: header }) {
  return render_if_valid_data(
    "https://librarianofstars.ca/schema/components/page/header.json",
    data,
    <div className="header">
      {data.sections.map((section) => {
        return (
          <HeaderSection
            key={to_key(section.id)}
            data={section}
          />
        );
      })}
    </div>,
  );
}
