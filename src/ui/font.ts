import localFonts from "next/font/local";

export const geist = localFonts({
  src: [
    {
      path: "../../public/assets/fonts/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/GeistMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Geist-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/GeistMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Geist-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/GeistMono-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Geist-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export const geist_mono = localFonts({
  src: [
    {
      path: "../../public/assets/fonts/GeistMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/GeistMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/GeistMono-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-mono",
});
