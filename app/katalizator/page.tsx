import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PriceList } from "@/components/PriceList";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Каталізатор | Викуп та скупка каталізаторів по всій Україні",
  description:
    "Каталізатор автомобіля можна вигідно продати в KATALIZATORY AUTO UA. Оцінка за спектральним аналізом, чесні ціни до 40 000 грн, скупка керамічних і металевих каталізаторів та сажових фільтрів по всій Україні.",
  keywords: [
    "каталізатор",
    "катализатор",
    "скупка каталізаторів",
    "выкуп катализаторов",
    "катализатор цена",
    "каталізатор київ",
  ],
};

export default function KatalizatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-16 md:py-20 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Каталізатор: вигідний викуп та скупка по всій Україні
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            KATALIZATORY AUTO UA спеціалізується на викупі автомобільних каталізаторів та сажових
            фільтрів. Ми працюємо як з керамічними, так і з{" "}
            <strong>металевими каталізаторами</strong> будь‑яких марок авто.
          </p>
          <p className="text-lg text-muted-foreground">
            Оцінка проводиться за допомогою професійного спектрального аналізатора — ви бачите
            вміст <strong>Pt, Pd, Rh</strong> у каталізаторі та розумієте, звідки береться ціна.
            Приймаємо каталізатори по всій Україні, у тому числі поштою.
          </p>
        </div>
      </section>

      <PriceList />
      <Process />
      <FAQ />
      <CTA />
    </main>
  );
}


