import NavigationBar from "./nav_bar";

export default function Header(props) {
  return (
    <div className="header">
      <NavigationBar links={[{ id: "0", linked: "./", display: "example" }]} />
      <PageTitle>Librarian Of Stars' Homepage!</PageTitle>
      <HeaderSeperator />
    </div>
  );
}

export function PageTitle({ children }) {
  return <h1 className="page-title">{children}</h1>;
}

export function HeaderSeperator() {
  return <br className="page-seperator header" />;
}
