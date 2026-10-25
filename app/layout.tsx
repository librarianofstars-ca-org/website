import Layout, { default_layout_props, layout_props } from "@/components/meta";

// import { IdentifiedHeading } from "@/components/elements/heading";

let homepage_props: layout_props = {
  ...default_layout_props,
};

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout properties={homepage_props}>{children}</Layout>;
}
