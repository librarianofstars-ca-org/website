import "@/styles/components/shared.css";
import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/sidebar.css";

import Seperator from "@/components/elements/seperator";

export default function Sidebar({ children }) {
  return (
    <div className="sidebar wraper">
      <SideBarSeperator />
      <div className="sidebar contents">{children}</div>
      <SideBarSeperator />
    </div>
  );
}

export function SideBarSeperator() {
  return (
    <Seperator
      isVertical={true}
      className="sidebar"
    />
  );
}
