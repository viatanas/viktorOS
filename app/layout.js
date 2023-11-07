import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Viktor Atanasov",
  description: "A space to share thoughts and learnings.",
  openGraph: {
    url: "https://viktoratanasov.com",
    title: "Viktor Atanasov",
    description: "A space to share thoughts and learnings.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
