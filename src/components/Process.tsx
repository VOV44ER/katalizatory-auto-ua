import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Залишаєте заявку",
    description: "Заповніть просту форму на сайті або зателефонуйте нам безпосередньо",
  },
  {
    number: "02",
    title: "Консультація менеджера",
    description: "Протягом 5 хвилин наш спеціаліст зв'яжеться з вами для уточнення деталей",
  },
  {
    number: "03",
    title: "Оцінка вартості",
    description: "Визначаємо точну ціну вашого каталізатора на основі його типу та стану",
  },
  {
    number: "04",
    title: "Отримання грошей",
    description: "Ви отримуєте готівку одразу після угоди або на вашу картку",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Як це <span className="text-primary">працює?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простий і прозорий процес викупу каталізаторів у 4 кроки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          { steps.map((step, index) => (
            <div
              key={ index }
              className="relative animate-slide-up h-full"
              style={ { animationDelay: `${index * 0.15}s` } }
            >
              {/* Connector Line */ }
              { index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
              ) }

              <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-smooth group h-full flex flex-col">
                {/* Number Badge */ }
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center shadow-glow font-display font-bold text-lg">
                  { step.number }
                </div>

                <div className="mt-4">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-smooth" />
                  <h3 className="text-xl font-display font-bold mb-3">
                    { step.title }
                  </h3>
                  <p className="text-muted-foreground">
                    { step.description }
                  </p>
                </div>
              </div>
            </div>
          )) }
        </div>
      </div>
    </section>
  );
};