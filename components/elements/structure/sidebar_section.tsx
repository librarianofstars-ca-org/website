import TableOfContents, {
  table_of_contents,
} from "@/components/elements/structure/table_of_contents";
import { render_if_valid_data } from "@/schema/validation";
import { keyed_list, to_key } from "@/utilities/key_mapping";

export interface sidebar_section extends keyed_list {
  section_type: string;
  contents: table_of_contents; // | other sections
}
export default function SidebarSection({ data }: { data: sidebar_section }) {
  return render_if_valid_data(
    "https://librarianofstars.ca/schema/components/elements/structure/sidebar_section.json",
    data,
    <PickSidebarSection data={data} />,
  );
}

function PickSidebarSection({ data }: { data: sidebar_section }) {
  switch (data.section_type) {
    case "TOC":
      return (
        <TableOfContents
          key={to_key(data.id)}
          data={data.contents}
        />
      );
    default:
      return (
        <span className="error">
          Could not find sidebar section type
          {data.section_type}
        </span>
      );
  }
}
