import "@/styles/components/shared.css";
import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/main.css";

import Seperator from "@/components/page_structure/seperator";

export default function Main({ children }) {
  return (
    <div className="main-body">
      <MainSeperator isStart={true} />
      {children}
      <MainSeperator isStart={false} />
    </div>
  );
}

function MainSeperator({ isStart }) {
  return (
    <Seperator
      isVertical={false}
      className={"main " + (isStart ? "start" : "end")}
    />
  );
}
