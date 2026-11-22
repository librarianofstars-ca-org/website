import "@/styles/components/blocks/shared.css";
import "@/styles/components/blocks/gallery_block.css";

import { BlockWraper } from "@/components/blocks/generic_block";
import { render_if_valid_data } from "@/schema/validation";
import { keyed_list, to_key } from "@/utilities/key_mapping";
import Image, { image } from "@/components/elements/image";

export interface gallery_item extends keyed_list {
  contents: string | image;
  // JSX.Element;
  label: string;
}
export interface gallery_block extends keyed_list {
  contents: gallery_item[];
}

export default function GalleryBlock({ data }: { data: gallery_block }) {
  return render_if_valid_data(
    "https://librarianofstars.ca/schema/components/blocks/gallery.json",
    data,
    <BlockWraper
      type="gallery"
      wrapper="ul"
    >
      {data.contents.map((item) => (
        <GalleryItem
          key={to_key(item.id)}
          galleryitem={item}
        />
      ))}
    </BlockWraper>,
  );
}

export function GalleryItem({ galleryitem }: { galleryitem: gallery_item }) {
  let display;
  switch (typeof galleryitem.contents) {
    case "string":
      display = galleryitem.contents;
      break;
    case "object":
      display = <Image data={{ ...galleryitem.contents }} />;
      break;
  }
  return (
    <div
      className="gallery-item"
      key={to_key(galleryitem.id)}
    >
      <li className="gallery-display">{display}</li>
      <span className="gallery-label">{galleryitem.label}</span>
    </div>
  );
}
