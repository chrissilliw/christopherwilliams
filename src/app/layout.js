import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Roboto, Lato } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata = {
  title: "Christopher Williams",
  description: "Christopher Williams, Fullstackare | Min Webbportfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`!scroll-smooth  overflow-x-hidden ${roboto.variable} ${lato.variable}`}
    >
      {/* <body className={`${inter.className}`}> */}
      <body className="overflow-x-hidden">
        <div className="w-screen h-auto bg-[#F8F7F1]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
