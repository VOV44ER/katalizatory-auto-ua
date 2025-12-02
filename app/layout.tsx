import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Скупка и прием катализаторов в Украине | katalizatory-auto.ua",
    description:
        "Оценка и выкуп автомобильных катализаторов в Украине. Быстрый расчет стоимости онлайн, честные цены, удобная доставка и моментальная оплата.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="uk">
            <body>{ children }</body>
        </html>
    );
}


