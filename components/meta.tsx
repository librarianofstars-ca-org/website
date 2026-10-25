import { IdentifiedHeading } from "@/components/elements/heading";

import "@/styles/base.css";

type head_props = {
  charSet: string;
  aboutPage: {
    pageTitle: string;
    pageDiscription: string;
    pageAuthor: string;
  };
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
    pageTitle: "Default Page"; // LibrarianOfStars's Homepage
    pageDiscription: "A simple index page, for my project of a website.";
    pageAuthor: "Librarian Of Stars";
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
      {/* standard charset for web dev */}
      <meta charSet={properties.charSet} />
      {/* Mobile view help */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      {/* Title of Page */}
      <title>{properties.aboutPage.pageTitle}</title>
      {/* About me */}
      <meta
        name="description"
        content={properties.aboutPage.pageDiscription}
      />
      <meta
        name="author"
        content={properties.aboutPage.pageAuthor}
      />

      {/* <!-- Web icons -->
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
    /> --> */}
    </head>
  );
}

export function PageBody({ properties }: { properties: body_props }) {
  return <body id="page">{/* {children} */}</body>;
}
