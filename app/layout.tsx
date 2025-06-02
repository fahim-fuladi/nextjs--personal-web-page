import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Fahim Fuladi",
  description: "Personal landing page",
};

export const metadataa: Metadata = {
  title: "فهیم فولادی",
  description: "صفحه اختصاصی فهیم فولادی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
