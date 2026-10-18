import "@/styles/components/page_structure/shared.css";

export default function Seperator({ isVertical, ...props }) {
  return (
    <hr
      className={"page-seperator " + isVertical ? "vertical" : "horizontal"}
      {...props}
    />
  );
}
