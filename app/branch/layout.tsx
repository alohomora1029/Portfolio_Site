import "../globals.css";
import Header from "../organisms/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className="bg-[#f5f5f5]">
          {/*Header*/}
          <Header />
          {children}
          {/*Footer*/}
        </body>
       
      </html>
    </>
  );
}
