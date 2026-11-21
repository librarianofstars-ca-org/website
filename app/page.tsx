import "@/styles/shared.css";
import "@/styles/app/shared.css";
import "@/styles/app/homepage.css";

import Page from "@/components/page/page";

import homepage_data from "@/data/app/homepage/compiled/page.json";

export default function HomePage() {
  return <Page data={homepage_data} />;
}
