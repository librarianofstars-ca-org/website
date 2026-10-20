import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/icon.css";

export default function Icon({
  size,
  shape,
  source,
  className,
}: {
  size: number | [number, number];
  shape: "circle" | "square" | "rect";
  source: string;
  className?: string;
}) {
  // [Width, Height]
  let icon_width: number;
  let icon_height: number;
  if (typeof size === "number") {
    icon_width = size;
    icon_height = size;
  } else {
    icon_width = size[0];
    icon_height = size[1];
  }
  return (
    <img
      width={icon_width}
      height={icon_height}
      src={source}
      className={className + " icon " + shape}
    />
  );
}
