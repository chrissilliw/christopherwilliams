import { Roboto, Lato } from "next/font/google";

const roboto_mono = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

export const roboto_font = roboto_mono.variable;
