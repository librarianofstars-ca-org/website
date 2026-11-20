import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/footer.css";

import FooterSection, {
  footer_section,
} from "@/components/elements/structure/footer_section";

import { to_key } from "@/utilities/key_mapping";

export default function Footer({ data }: { data: footer_section[] }) {
  return (
    <>
      <div className="footer">
        {data.map((section: footer_section, index: number) => (
          <div
            className="footer-section-wrapper"
            key={to_key(section.id)}
          >
            {index != 0 && <hr className="page-seperator vertical footer" />}
            <FooterSection {...section} />
          </div>
        ))}
      </div>
    </>
  );
}
