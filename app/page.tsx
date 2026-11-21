import "@/styles/app/homepage.css";

import Page from "@/components/meta/page";

import homepage_data from "@/data/app/homepage/compiled/page.json";

export default function HomePage() {
  return <Page data={homepage_data} />;
}
