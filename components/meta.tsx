import { IdentifiedHeading } from "@/components/elements/heading";

import "@/styles/base.css";

type pageDetails = {
  Title: string;
  Discription: string;
  Author: string;
};

type head_props = {
  charSet: string;
  aboutPage: pageDetails;
};
type body_props = {};
type layout_props = {
  head: head_props;
  body: body_props;
  language: string;
  className: string;
};

interface default_head_props extends head_props {
  charSet: "utf-8";
  aboutPage: {
    Title: "Default Page"; // LibrarianOfStars's Homepage
    Discription: "A simple index page, for my project of a website.";
    Author: "Librarian Of Stars";
  };
}
interface default_body_props extends body_props {}
interface default_layout_props extends layout_props {
  head: default_head_props;
  body: default_body_props;
  language: "en";
  className: "style-root";
}

export default function Layout({ properties }: { properties: layout_props }) {
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

function PageDetails({ details }: { details: pageDetails }) {
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
  return <body id="page">{/* {children} */}</body>;
}
