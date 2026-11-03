import "@/styles/components/blocks/shared.css";
import "@/styles/components/blocks/gallery_block.css";

import { JSX } from "react/jsx-runtime";

import Block from "@/components/blocks/generic_block";

export type gallery_item = { show: JSX.Element; label: string };
export type gallery_items = gallery_item[];

export default function GalleryBlock({ items }: { items: gallery_items }) {
  return (
    <Block
      type="gallery"
      wrapper="ul"
    >
      {items.map((item) => (
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
