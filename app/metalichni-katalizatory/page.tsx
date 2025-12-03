import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PriceList } from "@/components/PriceList";

export const metadata: Metadata = {
  title: "Металевий каталізатор | Викуп металевих каталізаторів",
  description:
    "Викуп металевих каталізаторів по всій Україні. KATALIZATORY AUTO UA приймає металевий каталізатор будь‑яких марок авто, пропонуючи чесну ціну за вміст платини, паладію та родію.",
  keywords: [
    "металевий каталізатор",
    "металлический катализатор",
    "викуп металевих каталізаторів",
    "продати металевий каталізатор",
  ],
};

export default function MetalCatalystPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-16 md:py-20 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Металевий каталізатор: скільки коштує та де продати
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            <strong>Металевий каталізатор</strong> містить більше платини, паладію та родію, ніж
            керамічний, тому його вартість зазвичай вища. У KATALIZATORY AUTO UA ви можете продати
            металевий або металический катализатор за максимально вигідною ринковою ціною.
          </p>
          <p className="text-lg text-muted-foreground">
            Ми працюємо по всій Україні, приймаємо деталі в будь‑якому стані та показуємо весь
            процес оцінки на спектрометрі. Це гарантує чесну ціну для клієнта.
          </p>
        </div>
      </section>

      <PriceList />
      <CTA />
    </main>
  );
}


