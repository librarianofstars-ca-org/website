import Layout, {
  default_head_props,
  default_layout_props,
  default_page_details,
  layout_props,
} from "@/components/meta";

// import { IdentifiedHeading } from "@/components/elements/heading";

let homepage_props: layout_props = {
  ...default_layout_props,
  head: {
    ...default_head_props,
    aboutPage: { ...default_page_details, Title: "Homepage" },
  },
};

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout properties={homepage_props}>{children}</Layout>;
}
