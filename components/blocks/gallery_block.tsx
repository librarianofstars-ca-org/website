import "@/styles/components/blocks/shared.css";
import "@/styles/components/blocks/gallery_block.css";

import { JSX } from "react/jsx-runtime";

import Block from "@/components/blocks/generic_block";

export type gallery_item = {
  id: { index: number; name: string };
  contents:
    | string
    | {
        link: string;
        size: {
          width: number;
          height?: number;
        };
      };
  // JSX.Element;
  label: string;
};
export interface gallery_items {
  id: { index: number; name: string };
  contents: gallery_item[];
}

import { ErrorData, validate_against_schema } from "@/schema/validation";
import { to_key } from "@/utilities/key_mapping";

export default function GalleryBlock({ data }: { data: gallery_items }) {
  // if (
  //   !validate_against_schema(
  //     "https://librarianofstars.ca/schema/components/blocks/paragraph.json",
  //     data,
  //   )
  // ) {
  //   return <ErrorData data={data} />;
  // }
  return (
    <Block
      type="gallery"
      wrapper="ul"
    >
      {data.contents.map((item) => (
        <GalleryItem
          key={to_key(item.id)}
          galleryitem={item}
        />
      ))}
    </Block>
  );
}

export function GalleryItem({ galleryitem }: { galleryitem: gallery_item }) {
  if (typeof galleryitem.contents === "string") {
    return (
      <div
        className="gallery-item"
        key={to_key(galleryitem.id)}
      >
        <li className="gallery-display">{galleryitem.contents}</li>
        <span className="gallery-label">{galleryitem.label}</span>
      </div>
    );
  } else if (typeof galleryitem.contents === "object") {
    return (
      <div
        className="gallery-item"
        key={to_key(galleryitem.id)}
      >
        <li className="gallery-display">
          <img
            width={galleryitem.contents.size.width}
            height={
              galleryitem.contents.size.height ||
              galleryitem.contents.size.width
            }
            src={galleryitem.contents.link}
          >
            {}
          </img>
        </li>
        <span className="gallery-label">{galleryitem.label}</span>
      </div>
    );
  }
}
