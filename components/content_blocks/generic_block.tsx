import React, { ReactElement } from "react";
import { ReactNode } from "react";

export type block = ReactElement<typeof Block>;

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
