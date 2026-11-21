import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/icon.css";

import Image, { image } from "@/components/elements/image";

export interface icon {
  display: image;
  shape: "circle" | "square" | "rect";
  className?: string;
}

export default function Icon({ data }: { data: icon }) {
  return (
    <Image
      data={{
        ...data.display,
        className: (data.className ? data.className : "") + " " + data.shape,
      }}
    />
  );
}
