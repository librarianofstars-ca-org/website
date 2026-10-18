import "@/styles/components/page_structure/shared.css";

import Seperator from "@/components/page_structure/seperator";

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
  return (
    <Seperator
      isVertical={false}
      className="header"
    />
  );
}
