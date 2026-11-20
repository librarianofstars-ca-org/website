import "@/styles/components/shared.css";
import "@/styles/components/page/shared.css";
import "@/styles/components/page/main.css";

import { sections } from "@/components/elements/structure/section";

export default function Main({ children }: { children: sections }) {
  return <div className="main-body">{children}</div>;
}
