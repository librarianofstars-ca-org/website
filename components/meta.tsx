import { IdentifiedHeading } from "@/components/elements/heading";

import "@/styles/base.css";
import React from "react";

export interface page_details {
  Title: string;
  Discription: string;
  Author: string;
}

export interface head_props {
  charSet: string;
  aboutPage: page_details;
}
export interface body_props {
  contents: React.ReactNode;
}
export interface layout_props {
  head: head_props;
  body: body_props;
  language: string;
  className: string;
}

export const default_page_details: page_details = {
  Title: "Default Page", // LibrarianOfStars's Homepage
  Discription: "A simple index page, for my project of a website.",
  Author: "Librarian Of Stars",
};

export const default_head_props: head_props = {
  charSet: "utf-8",
  aboutPage: default_page_details,
};
export const default_body_props: body_props = {
  contents: <></>,
};
export const default_layout_props: layout_props = {
  head: default_head_props,
  body: default_body_props,
  language: "en",
  className: "style-root",
};

export default function Layout({
  properties,
  children,
}: {
  properties: layout_props;
  children: React.ReactNode;
}) {
  properties.body.contents = children;
  return (
    <html
      lang={properties.language}
      className={properties.className}
    >
      <PageHead properties={properties.head} />
      <PageBody properties={properties.body}>
        {/* <IdentifiedHeading
          contents={""}
          level={7}
          className={"nav-id-hidden"}
          headingId={"page_start"}
        />
        {children}
        <IdentifiedHeading
          contents={""}
          level={7}
          className={"nav-id-hidden"}
          headingId={"page_end"}
        /> */}
      </PageBody>
    </html>
  );
}

export function PageHead({ properties }: { properties: head_props }) {
  return (
    <head>
      <PageEncoding characterSet={properties.charSet} />
      <PageDetails details={properties.aboutPage} />
      <PageIcons />
    </head>
  );
}

function PageEncoding({ characterSet }: { characterSet: string }) {
  return (
    <>
      {/* standard charsets */}
      <meta charSet={characterSet} />
      {/* Mobile view helper for crawers, always included */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
    </>
  );
}

function PageDetails({ details }: { details: page_details }) {
  return (
    <>
      {/* Title of Page */}
      <title>{details.Title}</title>
      {/* About the Page */}
      <meta
        name="description"
        content={details.Discription}
      />
      {/* Creator of Page */}
      <meta
        name="author"
        content={details.Author}
      />
    </>
  );
}

function PageIcons() {
  {
    /* <!-- Web icons -->
    <!-- TODO: Create and add custom icons. -->
    <!--
    <link
      rel="icon"
      href="/favicon.ico"
      sizes="32x32"
    />
    <link
      rel="icon"
      href="/icon.svg"
      type="image/svg+xml"
    />
    <link
      rel="apple-touch-icon"
      href="/apple-touch-icon.png"
    /> --> */
  }
  return <></>;
}

export function PageBody({ properties }: { properties: body_props }) {
  return <body id="page">{properties.contents}</body>;
}
