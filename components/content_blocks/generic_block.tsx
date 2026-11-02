import React from "react";
import { ReactNode } from "react";

export default function Block({
  type,
  children,
  wrapper = "div",
}: {
  type: string;
  children: ReactNode[];
  wrapper?: string;
}) {
  return React.createElement(wrapper, { className: type + "-block" }, children);
}
