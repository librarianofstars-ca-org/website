export function PageHead() {
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

      {/* <!-- Links -->
      <!-- Styling --> */}
      {/* <link
        rel="stylesheet"
        href="./base.css"
        type="text/css"
      /> */}
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

export function PageBody({ children }) {
  return <body>{children}</body>;
}
