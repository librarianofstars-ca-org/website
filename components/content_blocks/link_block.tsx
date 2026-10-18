import Link from "next/link";

export default function LinkBLock({ blockTitle, describedLinks }) {
  return (
    <>
      <h3>{blockTitle}</h3>
      <dl>
        {describedLinks.map((link) => (
          <LinkItem key={link.id} describedLink={link} />
        ))}
      </dl>
    </>
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
