import type { Metadata } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { getDict, htmlLang, isLocale, locales } from "@/lib/i18n";
import "../globals.css";

const sans = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({ subsets: ["latin", "latin-ext", "vietnamese"], weight: ["500"], variable: "--font-mono", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDict(locale);
  return {
    title: d.meta.title,
    description: d.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}`])),
    },
    icons: { icon: "/favicon.png", apple: "/favicon.png" },
    openGraph: { title: d.meta.title, description: d.meta.description, images: ["/products/pallet-rack.webp"] },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={htmlLang[locale]} className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
