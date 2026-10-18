import "@/styles/components/page_structure/shared.css";

export default function Footer({ children }) {
  return (
    <div className="footer">
      <br className="page-seperator footer" />
      {children}
    </div>
  );
}
