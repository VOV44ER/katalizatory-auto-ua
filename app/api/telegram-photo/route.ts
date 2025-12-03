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

    let form: FormData;

    try {
        form = await req.formData();
    } catch {
        return NextResponse.json({ ok: false, error: "Invalid form data" }, { status: 400 });
    }

    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const brand = String(form.get("brand") || "");
    const year = String(form.get("year") || "");
    const model = String(form.get("model") || "");
    const comment = String(form.get("comment") || "");
    const photo = form.get("photo") as File | null;

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

    const caption = lines.join("\n");

    try {
        if (photo) {
            const tgForm = new FormData();
            tgForm.append("chat_id", TELEGRAM_CHAT_ID);
            tgForm.append("caption", caption);
            tgForm.append("parse_mode", "HTML");
            tgForm.append("photo", photo);

            const tgResponse = await fetch(
                `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`,
                {
                    method: "POST",
                    body: tgForm,
                },
            );

            const json = await tgResponse.json();

            if (!json.ok) {
                console.error("Telegram sendPhoto error:", json);
                return NextResponse.json({ ok: false, error: "Telegram API error" }, { status: 502 });
            }
        } else {
            const tgResponse = await fetch(
                `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: caption,
                        parse_mode: "HTML",
                    }),
                },
            );

            const json = await tgResponse.json();

            if (!json.ok) {
                console.error("Telegram sendMessage error:", json);
                return NextResponse.json({ ok: false, error: "Telegram API error" }, { status: 502 });
            }
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Failed to send Telegram message with photo", error);
        return NextResponse.json(
            { ok: false, error: "Failed to send Telegram message" },
            { status: 500 },
        );
    }
}


