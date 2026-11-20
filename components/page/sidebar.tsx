import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/sidebar.css";

import Seperator from "@/components/elements/seperator";

export default function Sidebar({ children }) {
  return (
    <div className="sidebar wraper">
      <Seperator
        isVertical={true}
        className="sidebar left"
      />
      <div className="sidebar contents">{children}</div>
      <Seperator
        isVertical={true}
        className="sidebar right"
      />
    </div>
  );
}
