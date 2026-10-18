export default function Section({ sectionTitle, children }) {
  return (
    <>
      <h2 className="section title">{sectionTitle}</h2>
      <div className="section content">{children}</div>
    </>
  );
}
