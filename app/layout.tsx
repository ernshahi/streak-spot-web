import type { Metadata } from "next";
import { Fraunces, Noto_Sans_JP, Source_Sans_3 } from "next/font/google";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getLocale, getMessages } from "@/lib/i18n/getLocale";
import { site } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";

import "./globals.css";

const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyJa = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const title = `${site.name} — ${messages.site.tagline}`;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: `%s · ${site.name}`,
    },
    description: messages.site.description,
    applicationName: site.name,
    authors: [{ name: site.name }],
    openGraph: {
      type: "website",
      url: site.url,
      siteName: site.name,
      title,
      description: messages.site.description,
      images: [{ url: "/icon.png", width: 512, height: 512, alt: site.name }],
    },
    twitter: {
      card: "summary",
      title,
      description: messages.site.description,
      images: ["/icon.png"],
    },
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png" }],
      apple: [{ url: "/icon.png" }],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const fontClass =
    locale === "ja"
      ? `${display.variable} ${body.variable} ${bodyJa.variable}`
      : `${display.variable} ${body.variable}`;

  return (
    <html
      lang={locale}
      className={`${fontClass} h-full`}
      style={
        locale === "ja"
          ? ({
              "--font-sans":
                "var(--font-noto-sans-jp), var(--font-source-sans), ui-sans-serif, system-ui, sans-serif",
            } as React.CSSProperties)
          : undefined
      }
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
