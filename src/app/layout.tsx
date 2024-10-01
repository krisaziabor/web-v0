import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/dist/compiled/@next/font/dist/local";


export const metadata: Metadata = {
  title: "Kris Aziabor",
  description: "Coming back soon.",
  icons: {
    icon: './icon.ico'
  },
};

const pppangramsans = localFont({
  src: [
    {
      path: '../public/fonts/PPPangramSans-Bold.otf',
      weight: '700'
    },
  ],
  variable: '--font-pppangramsans'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pppangramsans.variable}`}>{children}</body>
    </html>
  );
}
