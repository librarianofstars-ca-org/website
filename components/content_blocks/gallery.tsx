import "@/styles/components/shared.css";
import "@/styles/components/content_blocks/gallery.css";

import { JSX } from "react/jsx-runtime";

export type gallery_item = { show: JSX.Element; label: string };
export type gallery_items = gallery_item[];

export default function Gallery({ items }: { items: gallery_items }) {
  return (
    <ul className="gallery">
      {items.map((item) => (
        <GalleryItem
          key={item.label}
          galleryitem={item}
        />
      ))}
    </ul>
  );
}

export function GalleryItem({ galleryitem }: { galleryitem: gallery_item }) {
  return (
    <li className="gallery-item">
      {galleryitem.show}
      <span className="gallery-label">{galleryitem.label}</span>
    </li>
  );
}
