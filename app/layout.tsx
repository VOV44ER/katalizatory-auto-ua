import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

const siteUrl = "https://katalizatory-auto-ua.vercel.app";

export const metadata: Metadata = {
    title: "Скупка та прийом каталізаторів в Україні | KATALIZATORY AUTO UA",
    description:
        "KATALIZATORY AUTO UA — викуп, скупка та оцінка автомобільних каталізаторів і сажових фільтрів по всій Україні. Чесні ціни, спектральний аналіз, готівка або переказ на карту за 5 хвилин.",
    keywords: [
        "каталізатор",
        "катализатор",
        "продати каталізатор",
        "продать катализатор",
        "скупка каталізаторів",
        "выкуп катализаторов",
        "сажовий фільтр",
        "сажевый фильтр",
        "металевий каталізатор",
        "металлический катализатор",
        "каталізатори київ",
        "катализаторы украина",
    ],
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: siteUrl,
    },
    openGraph: {
        type: "website",
        url: siteUrl,
        siteName: "KATALIZATORY AUTO UA",
        title: "KATALIZATORY AUTO UA — скупка та викуп каталізаторів по всій Україні",
        description:
            "Продайте свій каталізатор або сажевий фільтр дорого та безпечно. Професійний спектральний аналіз, чесні ціни до 40 000 грн, виплата за 5 хвилин.",
        locale: "uk_UA",
    },
    twitter: {
        card: "summary_large_image",
        title: "KATALIZATORY AUTO UA — скупка каталізаторів в Україні",
        description:
            "Швидка оцінка та викуп каталізаторів і сажових фільтрів. Безкоштовна консультація та чесні ціни.",
    },
    icons: {
        icon: [
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon.ico", sizes: "any" },
        ],
        apple: "/favicon.svg",
    },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="uk">
            <body>
                <Providers>{ children }</Providers>
            </body>
        </html>
    );
}


