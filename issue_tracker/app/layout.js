import "./globals.css";

export const metadata = {
  title: "Issue Tracker",
  description: "Track issues with no hassle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
