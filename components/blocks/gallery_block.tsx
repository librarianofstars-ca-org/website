import "@/styles/components/blocks/shared.css";
import "@/styles/components/blocks/gallery_block.css";

import { BlockWraper } from "@/components/blocks/generic_block";
import { ErrorData, validate_against_schema } from "@/schema/validation";
import { keyed_list, to_key } from "@/utilities/key_mapping";
import Image, { image } from "../elements/image";

export interface gallery_item extends keyed_list {
  contents: string | image;
  // JSX.Element;
  label: string;
}
export interface gallery_block extends keyed_list {
  contents: gallery_item[];
}

export default function GalleryBlock({ data }: { data: gallery_block }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/blocks/gallery.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
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
    </BlockWraper>
  );
}

export function GalleryItem({ galleryitem }: { galleryitem: gallery_item }) {
  let display;
  if (typeof galleryitem.contents === "string") {
    display = galleryitem.contents;
  } else if (typeof galleryitem.contents === "object") {
    if (
      !validate_against_schema(
        "https://librarianofstars.ca/schema/components/elements/image.json",
        galleryitem.contents,
      )
    ) {
      return <ErrorData data={galleryitem.contents} />;
    }
    display = <Image data={{ ...galleryitem.contents }} />;
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
