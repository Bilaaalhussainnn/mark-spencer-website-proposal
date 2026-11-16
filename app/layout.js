import "./globals.css";
import { proposal } from "../content/proposal";

export const metadata = {
  title: `${proposal.title} | ${proposal.studio}`,
  description: `A restaurant website and direct-reservation proposal for ${proposal.business}.`,
  icons: { icon: "/orbilect-seo-mark.svg" },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
