import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Process } from "@/components/Process";
import { OnlineEstimate } from "@/components/OnlineEstimate";

export const metadata: Metadata = {
  title: "Продати каталізатор дорого | Викуп каталізаторів в Україні",
  description:
    "Хочете продати каталізатор дорого? KATALIZATORY AUTO UA пропонує чесний викуп каталізаторів та сажових фільтрів з оплатою за 5 хвилин. Попередня онлайн‑оцінка, спектральний аналіз, зручна оплата готівкою або на карту.",
  keywords: [
    "продати каталізатор",
    "продать катализатор",
    "продати каталізатор київ",
    "де продати каталізатор",
    "выкуп катализаторов дорого",
  ],
};

export default function SellCatalystPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-16 md:py-20 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Продати каталізатор дорого та безпечно
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Якщо ви шукаєте, де <strong>продати каталізатор</strong> або сажовий фільтр по
            максимально вигідній ціні — ви за адресою. Ми працюємо по всій Україні, приймаємо
            каталізатори як від приватних осіб, так і від автосервісів.
          </p>
          <p className="text-lg text-muted-foreground">
            Оформіть онлайн‑заявку або надішліть фото — ми зробимо попередній прорахунок. Після
            спектрального аналізу запропонуємо чесну ціну та одразу виплатимо гроші.
          </p>
        </div>
      </section>

      <OnlineEstimate />
      <Process />
      <CTA />
    </main>
  );
}


