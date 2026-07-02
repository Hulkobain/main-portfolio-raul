import "./globals.css";

import { Footer, Header } from "@/components";
import { manrope, spaceGrotesk } from "@/fonts";

const themeScript = `
  (() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", saved ? saved === "dark" : prefersDark);
    } catch (_) {}
  })();
`;

export const metadata = {
  metadataBase: new URL("https://portfolio-raulromero.vercel.app"),
  title: {
    default: "Raúl Romero | Full-stack developer",
    template: "%s | Raúl Romero",
  },
  description:
    "Full-stack developer building production-ready web products with React, TypeScript, Java and Spring Boot.",
};

export const viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f4f0" },
    { media: "(prefers-color-scheme: dark)", color: "#07090d" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} portfolio-background min-h-screen overflow-x-hidden font-sans antialiased`}
      >
        <a
          className="sr-only z-[100] rounded-full bg-ink px-4 py-2 text-canvas focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          href="#main-content"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
