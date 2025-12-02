import { Clock, Shield, TrendingUp, Zap } from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "Швидка консультація",
    description: "Залишаєте заявку та протягом 5 хв з Вами зв'яжеться менеджер для уточнення деталей та розрахунку.",
  },
  {
    icon: Shield,
    title: "Більше 5 років на ринку",
    description: "Нам довіряють люди по всій Україні, тому що ми вже більше 5 років на ринку.",
  },
  {
    icon: TrendingUp,
    title: "10 000+ викупів каталізаторів",
    description: "За всі роки роботи ми викупили та переробили більше 10 000+ каталізаторів різних видів.",
  },
  {
    icon: Zap,
    title: "Максимальна вигода",
    description: "Пропонуємо найвищі ціни на ринку - до 40 000 грн за один каталізатор.",
  },
];

export const Advantages = () => {
  return (
    <section id="advantages" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Чому обирають <span className="text-primary">нас?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ми працюємо чесно і прозоро, забезпечуючи найкращі умови для наших клієнтів
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="animate-slide-up bg-card rounded-2xl p-6 hover:shadow-card transition-smooth hover:-translate-y-2 border border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-smooth">
                <advantage.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};