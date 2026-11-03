import Link from "next/link";

import { navlink } from "@/components/elements/navbar";
import { IdentifiedHeading } from "@/components/elements/heading";

import Block from "@/components/content_blocks/generic_block";

import "@/styles/components/content_blocks/shared.css";
import "@/styles/components/content_blocks/link_block.css";

export type described_link = navlink & { name: string; description: string };
export type block_of_links = {
  blockTitle: string;
  describedLinks: described_link[];
};

export default function LinkBLock({
  blockTitle,
  describedLinks,
}: block_of_links) {
  return (
    <Block type={"link"}>
      <IdentifiedHeading
        contents={blockTitle}
        level={4}
        headingId={blockTitle.toLowerCase() + "_links"}
      />
      <dl>
        <LinksHeader />
        {describedLinks.map((link) => (
          <LinkItem
            key={link.id}
            describedLink={link}
          />
        ))}
      </dl>
    </Block>
  );
}

export function LinkItem({ describedLink }: { describedLink: described_link }) {
  return (
    <>
      <dt className="body">
        <p>{describedLink.name}</p>
        <Link href={describedLink.linked}>{describedLink.display}</Link>
      </dt>
      <dd className="body">{describedLink.description}</dd>
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
