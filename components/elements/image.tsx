import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/image.css";

export interface image {
  source: string;
  size: { width: number; height?: number };
  className?: string;
}

export default function Image({ data }: { data: image }) {
  return (
    <img
      width={data.size.width}
      height={data.size.height || data.size.width} // fallback to square
      src={data.source}
      className={"icon " + data.className}
    />
  );
}
