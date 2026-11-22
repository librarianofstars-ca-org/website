import "@/styles/components/blocks/shared.css";
import "@/styles/components/blocks/paragraph_block.css";

import { BlockWraper } from "@/components/blocks/generic_block";
import { render_if_valid_data } from "@/schema/validation";
import { keyed_list, to_key } from "@/utilities/key_mapping";
export interface paragraph_data extends keyed_list {
  contents: string | boolean;
}

export interface paragraph_block extends keyed_list {
  contents: paragraph_data[];
}

export default function ParagraphBlock({ data }: { data: paragraph_block }) {
  return render_if_valid_data(
    "https://librarianofstars.ca/schema/components/blocks/paragraph.json",
    data,
    <BlockWraper
      type={"paragraph"}
      key={to_key(data.id)}
    >
      {data.contents.map((paragraph) => (
        <ParagraphElement
          key={to_key(paragraph.id)}
          data={paragraph}
        />
      ))}
    </BlockWraper>,
  );
}
export function ParagraphElement({ data }: { data: paragraph_data }) {
  if (data.contents) {
    return <p>{data.contents}</p>;
  } else {
    return <p className="break-line paragraph-block empty" />;
  }
}
