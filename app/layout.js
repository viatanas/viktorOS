import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Viktor Atanasov",
  description: "A space to share thoughts and learnings.",
  opengraph: {
    title: "Viktor Atanasov",
    description: "A space to share thoughts and learnings.",
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
