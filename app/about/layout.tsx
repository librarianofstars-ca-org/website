import Layout, {
  default_head_props,
  default_layout_props,
  default_page_details,
  layout_props,
} from "@/components/meta";

let homepage_props: layout_props = {
  ...default_layout_props,
  className: default_layout_props["className"] + " aboutpage",
  head: {
    ...default_head_props,
    aboutPage: {
      ...default_page_details,
      Title: "About Me",
      Discription: "Details about myself, one Librarian Of Stars.",
    },
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout properties={homepage_props}>{children}</Layout>;
}
