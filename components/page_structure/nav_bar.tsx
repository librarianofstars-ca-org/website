import Link from "next/link";

export default function NavigationBar({
  links,
}: {
  links: [
    {
      id: string;
      linked: string;
      display: string;
    },
  ];
}) {
  return (
    <nav>
      {/* Icon / Logo */}
      <ol className="nav-bar-links">
        {links.map((link) => (
          <li
            key={link.id}
            className="nav-bar-link-item"
          >
            <Link
              href={link.linked}
              className="nav-link"
            >
              {link.display}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
