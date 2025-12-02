import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
    title: "Скупка и прием катализаторов в Украине | katalizatory-auto.ua",
    description:
        "Оценка и выкуп автомобильных катализаторов в Украине. Быстрый расчет стоимости онлайн, честные цены, удобная доставка и моментальная оплата.",
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


