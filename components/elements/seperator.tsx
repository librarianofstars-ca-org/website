import "@/styles/components/shared.css";
import "@/styles/components/elements/shared.css";
import "@/styles/components/elements/seperator.css";

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
