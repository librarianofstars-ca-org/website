import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/seperator.css";

export interface seperator {
  vertical: boolean;
  className?: string;
}

export default function Seperator({ data }: { data: seperator }) {
  return (
    <hr
      className={
        (data.className || "") +
        " page-seperator " +
        (data.vertical ? "vertical" : "horizontal")
      }
    />
  );
}
