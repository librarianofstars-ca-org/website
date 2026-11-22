import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/footer.css";

import FooterSection, {
  footer_section,
} from "@/components/elements/structure/footer_section";

import { to_key } from "@/utilities/key_mapping";

import { render_if_valid_data } from "@/schema/validation";

export interface footer {
  sections: footer_section[];
}

export default function Footer({ data }: { data: footer }) {
  return render_if_valid_data(
    "https://librarianofstars.ca/schema/components/page/footer.json",
    data,
    <div className="footer">
      {data.sections.map((section: footer_section) => (
        <FooterSection
          key={to_key(section.id)}
          data={section}
        />
      ))}
    </div>,
  );
}
