import "@/styles/components/shared.css";
import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/main.css";

import Seperator from "@/components/elements/seperator";
import { sections } from "@/components/elements/section";

export default function Main({ children }: { children: sections }) {
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
