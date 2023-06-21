"use client"
import "./globals.css";
import { RecoilRoot } from "recoil";

export default function RootLayout(
  {
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <RecoilRoot>
      <html lang="en">
        <body className="bg-scroll bg-pastel">
          <main>{children}</main>
        </body>
      </html>
    </RecoilRoot>
    </>
  );
}
