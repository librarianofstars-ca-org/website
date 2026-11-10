import "@/styles/components/blocks/shared.css";
import "@/styles/components/blocks/gallery_block.css";

import { JSX } from "react/jsx-runtime";

import Block from "@/components/blocks/generic_block";

export type gallery_item = { show: JSX.Element; label: string };
export type gallery_items = gallery_item[];

import { ErrorData, validate_against_schema } from "@/schema/validation";
import { to_key } from "@/utilities/key_mapping";

export default function GalleryBlock({ data }: { data: gallery_items }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/blocks/paragraph.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <Block
      type="gallery"
      wrapper="ul"
    >
      {data.map((item) => (
        <GalleryItem
          key={item.label}
          galleryitem={item}
        />
      ))}
    </Block>
  );
}

export function GalleryItem({ galleryitem }: { galleryitem: gallery_item }) {
  return (
    <div className="gallery-item">
      <li className="gallery-display">{galleryitem.show}</li>
      <span className="gallery-label">{galleryitem.label}</span>
    </div>
  );
}
