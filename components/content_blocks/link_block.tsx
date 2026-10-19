import Link from "next/link";

import { navlink } from "@/components/page_structure/nav_bar";

import "@/styles/components/content_blocks/link_block.css";

type described_link = navlink & { name: string; description: string };

export default function LinkBLock({
  blockTitle,
  describedLinks,
}: {
  blockTitle: string;
  describedLinks: described_link[];
}) {
  return (
    <div className="link-block">
      <h3>{blockTitle}</h3>
      <dl>
        <LinksHeader />
        {describedLinks.map((link) => (
          <LinkItem
            key={link.id}
            describedLink={link}
          />
        ))}
      </dl>
    </div>
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
