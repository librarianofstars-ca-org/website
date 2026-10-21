import "@/styles/components/shared.css";
import "@/styles/components/content_blocks/gallery.css";

import { JSX } from "react/jsx-runtime";

export type gallery_item = JSX.Element;
export type gallery_items = gallery_item[];

export default function Gallery({ items }: { items: gallery_items }) {
  return (
    <ul className="gallery">
      {items.map((item) => (
        <GalleryItem galleryitem={item} />
      ))}
    </ul>
  );
}

export function GalleryItem({ galleryitem }: { galleryitem: gallery_item }) {
  return <li className="gallery-item">{galleryitem}</li>;
}
