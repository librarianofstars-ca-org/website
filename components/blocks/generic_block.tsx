import React, { ReactElement } from "react";
import { ReactNode } from "react";
import GalleryBlock, { gallery_block } from "@/components/blocks/gallery_block";
import LinkBLock, { link_block } from "@/components/blocks/link_block";
import ParagraphBlock, {
  paragraph_block,
} from "@/components/blocks/paragraph_block";
import { keyed_list, to_key } from "@/utilities/key_mapping";


export interface block extends keyed_list {
  block_type: string;
  contents: gallery_block | link_block | paragraph_block;
}

export function BlockWraper({
  type,
  children,
  wrapper = "div",
}: {
  type: string;
  children: ReactNode[];
  wrapper?: string;
}) {
  return React.createElement(wrapper, { className: type + "-block" }, children);
}

export default function GenericBlock({ data }: { data: block }) {
  switch (data.block_type) {
    case "paragraph":
      return (
        <ParagraphBlock
          key={to_key(data.id)}
          data={data.contents as paragraph_block}
        />
      );
    case "gallery":
      return (
        <GalleryBlock
          key={to_key(data.id)}
          data={data.contents as gallery_block}
        />
      );
    case "links":
      return (
        <LinkBLock
          key={to_key(data.id)}
          data={data.contents as link_block}
        />
      );
    default:
      return "No Block Type Found";
  }
}
