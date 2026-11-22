import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/footer.css";

import FooterSection, {
  footer_section,
} from "@/components/elements/structure/footer_section";

import { to_key } from "@/utilities/key_mapping";

import { validate_against_schema, ErrorData } from "@/schema/validation";

export interface footer {
  sections: footer_section[];
}

export default function Footer({ data }: { data: footer }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/page/footer.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <>
      <div className="footer">
        {data.sections.map((section: footer_section, index: number) => (
          <FooterSection
            key={to_key(section.id)}
            data={section}
          />
        ))}
      </div>
    </>
  );
}
