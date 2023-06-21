"use client"
import { Suspense } from "react";
import "./globals.css";
import { RecoilRoot } from "recoil";
import Loading from "./molecules/loading";

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
          <main><Suspense fallback={<Loading/>}>{children}</Suspense></main>
        </body>
      </html>
      
    </RecoilRoot>
    </>
  );
}
