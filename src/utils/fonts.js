import { Roboto, Roboto_Mono, Lato } from "next/font/google";

const roboto_mono = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

const roboto_test = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto_test",
});

export const roboto = roboto_mono.variable;
export const roboto_test2 = roboto_test.variable;
