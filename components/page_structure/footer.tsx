import "@/styles/components/page_structure/shared.css";

export default function Footer({ children }) {
  return (
    <div className="footer">
      <hr className="page-seperator horizontal footer" />
      {children}
    </div>
  );
}
