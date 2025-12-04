import type { ReactNode } from "react";
import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

const siteUrl = "https://katalizatory-auto.com";

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
                {/* Meta (Facebook) Pixel */ }
                <Script
                    id="fb-pixel"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={ {
                        __html: `
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '2042197129517416'); 
                            fbq('track', 'PageView');
                        `,
                    } }
                />
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={ { display: "none" } }
                        src="https://www.facebook.com/tr?id=2042197129517416&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
                <Providers>{ children }</Providers>
            </body>
        </html>
    );
}


