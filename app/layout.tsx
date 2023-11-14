import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "DevOverflow",
  description: "this is the stack overflow clone website ",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} `}>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
