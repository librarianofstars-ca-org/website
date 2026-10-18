import "@/styles/components/content_blocks/section.css";
import "@/styles/components/content_blocks/shared.css";

export default function Section({ sectionTitle, children }) {
  return (
    <div className="section wrapper">
      <h2 className="section title">{sectionTitle}</h2>
      <div className="section content">{children}</div>
    </div>
  );
}
