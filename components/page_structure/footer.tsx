import "@/styles/components/shared.css";
import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/footer.css";

export default function Footer({ children }) {
  return (
    <>
      <hr className="page-seperator horizontal footer" />
      <div className="footer">{children} <FooterBlock /></div>
    </>
  );
}

function FooterBlock() {
  return (
    <div className="footer-section">
      <h4>title</h4>
      <dl>
        <dt>credits</dt>
        <dd>site design</dd>
      </dl>
    </div>
  );
}
