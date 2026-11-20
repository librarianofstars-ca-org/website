import "@/styles/components/shared.css";
import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/main.css";

import { sections } from "@/components/elements/structure/section";

export default function Main({ children }: { children: sections }) {
  return (
    <div className="main-body">
      {children}
    </div>
  );
}
