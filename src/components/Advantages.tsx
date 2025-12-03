"use client";

import { Clock, Shield, TrendingUp, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const advantages = [
  {
    icon: Clock,
    ua: {
      title: "Швидка консультація",
      description:
        "Залишаєте заявку та протягом 5 хв з Вами зв'яжеться менеджер для уточнення деталей та розрахунку.",
    },
    ru: {
      title: "Быстрая консультация",
      description:
        "Оставляете заявку — в течение 5 минут с вами свяжется менеджер, уточнит детали и сделает расчёт.",
    },
  },
  {
    icon: Shield,
    ua: {
      title: "Більше 5 років на ринку",
      description:
        "Нам довіряють люди по всій Україні, тому що ми вже більше 5 років на ринку.",
    },
    ru: {
      title: "Более 5 лет на рынке",
      description:
        "Нам доверяют клиенты по всей Украине, потому что мы работаем уже более 5 лет.",
    },
  },
  {
    icon: TrendingUp,
    ua: {
      title: "10 000+ викупів каталізаторів",
      description:
        "За всі роки роботи ми викупили та переробили більше 10 000 каталізаторів різних видів.",
    },
    ru: {
      title: "10 000+ выкупов катализаторов",
      description:
        "За годы работы мы выкупили и переработали более 10 000 катализаторов разных типов.",
    },
  },
  {
    icon: Zap,
    ua: {
      title: "Максимальна вигода",
      description:
        "Пропонуємо найвищі ціни на ринку — до 40 000 грн за один каталізатор.",
    },
    ru: {
      title: "Максимальная выгода",
      description:
        "Предлагаем одни из самых высоких цен на рынке — до 40 000 грн за один катализатор.",
    },
  },
];

export const Advantages = () => {
  const { lang } = useLanguage();
  const isRu = lang === "ru";

  return (
    <section id="advantages" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            { isRu ? "Почему выбирают" : "Чому обирають" }{ " " }
            <span className="text-primary">{ isRu ? "нас?" : "нас?" }</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            { isRu
              ? "Мы работаем честно и прозрачно, обеспечивая лучшие условия для наших клиентов."
              : "Ми працюємо чесно і прозоро, забезпечуючи найкращі умови для наших клієнтів" }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          { advantages.map((advantage, index) => {
            const content = isRu ? advantage.ru : advantage.ua;
            return (
              <div
                key={ index }
                className="animate-slide-up bg-card rounded-2xl p-6 hover:shadow-card transition-smooth hover:-translate-y-2 border border-border group"
                style={ { animationDelay: `${index * 0.1}s` } }
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-smooth">
                  <advantage.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  { content.title }
                </h3>
                <p className="text-muted-foreground">
                  { content.description }
                </p>
              </div>
            );
          }) }
        </div>
      </div>
    </section>
  );
};