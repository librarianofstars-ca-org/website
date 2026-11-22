import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/main.css";

import { to_key } from "@/utilities/key_mapping";

import { render_if_valid_data } from "@/schema/validation";

import MainSection, {
  main_section,
} from "@/components/elements/structure/main_section";

export interface main {
  sections: main_section[];
}

export default function Main({ data }: { data: main }) {
  return render_if_valid_data(
    "https://librarianofstars.ca/schema/components/page/main.json",
    data,
    <div className="main-body">
      {data.sections.map((section) => {
        return (
          <MainSection
            key={to_key(section.id)}
            data={section}
          />
        );
      })}
    </div>,
  );
}
