import Link from "next/link";

// import { navlink } from "@/components/elements/navbar";
// import { IdentifiedHeading } from "@/components/elements/heading";

import { BlockWraper, block_data } from "@/components/blocks/generic_block";

import "@/styles/components/blocks/shared.css";
import "@/styles/components/blocks/link_block.css";
import { to_key } from "@/utilities/key_mapping";
import { ErrorData, validate_against_schema } from "@/schema/validation";

export interface link_data {
  id: { index: number; name: string };
  contents: {
    name: string;
    link_points_to: string;
    display: string;
    link_description: string;
  };
}

export interface link_block extends block_data {
  contents: link_data[];
}

export default function LinkBLock({ data }: { data: link_block }) {
  if (
    !validate_against_schema(
      "https://librarianofstars.ca/schema/components/blocks/links.json",
      data,
    )
  ) {
    return <ErrorData data={data} />;
  }
  return (
    <BlockWraper
      type={"link"}
      wrapper="dl"
      key={to_key(data.id)}
    >
      {/* <IdentifiedHeading
        contents={blockTitle}
        level={4}
        headingId={blockTitle.toLowerCase() + "_links"}
      /> */}
      {/* <dl> */}
      <LinksHeader />
      {data.contents.map((link: link_data) => (
        <LinkItem
          key={to_key(link.id)}
          {...link.contents}
        />
      ))}
      {/* </dl> */}
    </BlockWraper>
  );
}

export function LinkItem({
  name,
  link_points_to,
  display,
  link_description,
}: {
  name: string;
  link_points_to: string;
  display: string;
  link_description: string;
}) {
  return (
    <>
      <dt className="body">
        <p>{name}</p>
        <Link href={link_points_to}>{display}</Link>
      </dt>
      <dd className="body">{link_description}</dd>
    </>
  );
}
export function LinksHeader() {
  return (
    <>
      <dt className="head type">Type</dt>
      <dt className="head link">Link</dt>
      <dd className="head disc">Description</dd>
    </>
  );
}
