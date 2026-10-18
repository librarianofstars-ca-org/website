import "@/styles/components/page_structure/shared.css";

export default function Main({ children }) {
  return (
    <div className="main-body">
      <MainSeperator />
      {children}
      <MainSeperator />
    </div>
  );
}

function MainSeperator() {
  return <br className="page-seperator main-body" />;
}
