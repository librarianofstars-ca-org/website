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
  return <hr className="page-seperator vertical main-body" />;
}
