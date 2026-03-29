import type { Metadata } from "next";
import "./globals.css";
import NSTHeader from "@/components/NSTHeader";
import NSTFooter from "@/components/NSTFooter";
import NSTScrollAnimations from "@/components/NSTScrollAnimations";

export const metadata: Metadata = {
  title: "North Shore Tiling Ltd | Auckland Tilers & Waterproofers",
  description:
    "Auckland's trusted tiling and waterproofing specialists. Bathroom, kitchen, outdoor, commercial tiling and more. Based on the North Shore. Call Tee and Steve today.",
  keywords:
    "tiling Auckland, North Shore tilers, bathroom tiling, waterproofing Auckland, commercial tiling NZ",
  openGraph: {
    title: "North Shore Tiling Ltd",
    description: "Tiled to Perfection. Auckland tilers and waterproofers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NSTHeader />
        <main>{children}</main>
        <NSTFooter />
        <NSTScrollAnimations />
      </body>
    </html>
  );
}
