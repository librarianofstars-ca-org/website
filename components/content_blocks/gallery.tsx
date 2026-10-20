import "@/styles/components/shared.css";
import "@/styles/components/content_blocks/gallery.css";

export default function Gallery({ children }) {
  return <ul className="gallery">{children}</ul>;
}

export function GalleryItem({ children }) {
  return <li className="gallery-item">{children}</li>;
}
