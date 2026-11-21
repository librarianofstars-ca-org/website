export interface head {
  page_title: string;
  page_discription: string;
  page_author: string;
  character_set?: string; // default "utf-8"
  language?: string; // default "en"
}

export function Head({ data }: { data: head }) {
  return (
    <head>
      {/* standard charset for web dev */}
      <meta charSet={data.character_set || "utf-8"} />
      {/* Mobile view help */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      {/* Title of Page */}
      <title>{data.page_title}</title>
      {/* About me */}
      <meta
        name="description"
        content={data.page_discription}
      />
      <meta
        name="author"
        content={data.page_author}
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
