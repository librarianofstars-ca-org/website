import Link from "next/link";

import "@/styles/components/content_blocks/link_block.css"

export default function LinkBLock({ blockTitle, describedLinks }) {
  return (
    <div className="link-block">
      <h3>{blockTitle}</h3>
      <dl>
        {describedLinks.map((link) => (
          <LinkItem key={link.id} describedLink={link} />
        ))}
      </dl>
    </div>
  );
}

export function LinkItem({ describedLink }) {
  return (
    <>
      <dt>
        <p>{describedLink.name}: </p>
        <Link href={describedLink.linked}>{describedLink.display}</Link>
      </dt>
      <dd>{describedLink.description}</dd>
    </>
  );
}

// <h3>External</h3>
// <dl>
//   <dl>Name</dl>
//   <dd>
//     <Link href={"./example"}>Link</Link>
//   </dd>
// </dl>
