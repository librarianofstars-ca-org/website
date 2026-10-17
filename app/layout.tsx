import Head from "@/components/meta";
import "@/styles/base.css";
import "@/styles/shared.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="style-root"
    >
      <Head />
      <body>{children}</body>
    </html>
  );
}
