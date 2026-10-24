import { IdentifiedHeading } from "@/components/elements/heading";

import "@/styles/base.css";

type head_props = {};
type body_props = {};
type layout_props = { head: head_props; body: body_props };

export default function Layout({ properties }: { properties: layout_props }) {
  return (
    <html
      lang="en"
      className="style-root"
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
      <meta charSet="utf-8" />
      {/* Mobile view help */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      {/* Title of Page */}
      <title>LibrarianOfStars's Homepage</title>
      {/* About me */}
      <meta
        name="description"
        content="A simple index page, for my project of a website."
      />
      <meta
        name="author"
        content="Librarian Of Stars"
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
  return <body id="page">
    {/* {children} */}
    </body>;
}
