import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Process } from "@/components/Process";

export const metadata: Metadata = {
  title: "Сажовий фільтр (DPF) | Викуп та очищення сажових фільтрів",
  description:
    "Викуп сажових фільтрів (сажевый фильтр, DPF) по всій Україні. KATALIZATORY AUTO UA пропонує чесні ціни, професійну оцінку та швидку виплату за сажові фільтри та каталізатори.",
  keywords: [
    "сажовий фільтр",
    "сажевый фильтр",
    "викуп сажового фільтра",
    "продати сажовий фільтр",
    "сажовий фільтр київ",
  ],
};

export default function SootFilterPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-16 md:py-20 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Сажовий фільтр (DPF): викуп та оцінка
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Сажовий фільтр, або <strong>сажевый фильтр / DPF</strong>, з часом забивається та
            потребує заміни. Ми викуповуємо такі деталі по всій Україні з чесною ціною та швидкою
            виплатою.
          </p>
          <p className="text-lg text-muted-foreground">
            Приймаємо сажові фільтри у будь‑якому стані — цілими, знятих з авто чи після ремонту.
            Орієнтовну ціну повідомляємо по телефону або після фото, остаточну вартість визначаємо
            після аналізу.
          </p>
        </div>
      </section>

      <Process />
      <CTA />
    </main>
  );
}


