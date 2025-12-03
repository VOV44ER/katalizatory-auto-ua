import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        return NextResponse.json(
            { ok: false, error: "Telegram credentials are not configured on the server" },
            { status: 500 },
        );
    }

    let data: any;

    try {
        data = await req.json();
    } catch {
        return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
    }

    const {
        source = "form",
        name,
        phone,
        brand,
        year,
        model,
        comment,
        extra,
    }: {
        source?: string;
        name?: string;
        phone?: string;
        brand?: string;
        year?: string;
        model?: string;
        comment?: string;
        extra?: Record<string, unknown>;
    } = data;

    const lines: string[] = [];

    lines.push(`🚀 <b>KATALIZATORY AUTO UA</b>`);

    if (name) lines.push(`👤 <b>Ім'я:</b> ${name}`);
    if (phone) lines.push(`📱 <b>Телефон:</b> ${phone}`);
    if (brand) lines.push(`🚗 <b>Марка авто:</b> ${brand}`);
    if (year) lines.push(`📅 <b>Рік випуску:</b> ${year}`);
    if (model) lines.push(`🆔 <b>Модель:</b> ${model}`);
    if (comment) {
        lines.push("");
        lines.push(`📝 <b>Коментар:</b>`);
        lines.push(comment);
    }

    const text = lines.join("\n");

    try {
        const tgResponse = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text,
                    parse_mode: "HTML",
                }),
            },
        );

        const json = await tgResponse.json();

        if (!json.ok) {
            console.error("Telegram API error:", json);
            return NextResponse.json({ ok: false, error: "Telegram API error" }, { status: 502 });
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Failed to send Telegram message", error);
        return NextResponse.json(
            { ok: false, error: "Failed to send Telegram message" },
            { status: 500 },
        );
    }
}


