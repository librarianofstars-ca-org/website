import "@/styles/components/page_structure/shared.css";

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
