import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/sidebar.css";

import Seperator from "@/components/page_structure/seperator";

export default function Sidebar({ children }) {
  return (
    <div className="sidebar">
      <SideBarSeperator />
      {children}
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
