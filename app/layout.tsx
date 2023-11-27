import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./prism2.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "./context/themeProvider";
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
        <body className={`${inter.className}  overflow-y-hidden`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
