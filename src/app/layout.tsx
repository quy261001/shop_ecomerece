import type { Metadata } from "next";
import "../common/styles/globals.css";
import AuthProvider from "./hocs/AuthProvider";
import { AntProvider } from "@/libs/antd/AntProvider";

export const metadata: Metadata = {
  title: "Shop ECom",
  description: "ECorm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntProvider>
          <AuthProvider>{children}</AuthProvider>
        </AntProvider>
      </body>
    </html>
  );
}
