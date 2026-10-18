import "@/styles/components/page_structure/shared.css";
import "@/styles/components/page_structure/seperator.css";

export default function Seperator({ isVertical, className, ...props }) {
  return (
    <hr
      className={
        className +
        " page-seperator " +
        (isVertical ? "vertical" : "horizontal")
      }
      {...props}
    />
  );
}
