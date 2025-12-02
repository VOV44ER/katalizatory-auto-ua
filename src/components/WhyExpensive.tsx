import { Sparkles, TrendingUp, Shield, Atom } from "lucide-react";
import { Card } from "@/components/ui/card";

const metals = [
  {
    name: "Платина",
    icon: Sparkles,
    description: "Один з найдорожчих металів у світі",
    price: "~$30,000 за унцію",
    usage: "Основний каталітичний елемент",
  },
  {
    name: "Паладій",
    icon: TrendingUp,
    description: "Рідкісніший за золото",
    price: "~$35,000 за унцію",
    usage: "Знижує викиди шкідливих газів",
  },
  {
    name: "Родій",
    icon: Atom,
    description: "Найдорожчий дорогоцінний метал",
    price: "~$150,000 за унцію",
    usage: "Перетворює оксиди азоту",
  },
];

export const WhyExpensive = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Чому каталізатори <span className="text-primary">дорогі?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Вартість визначається вмістом рідкісних дорогоцінних металів
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metals.map((metal, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-card transition-smooth hover:-translate-y-2 border-border animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-smooth group-hover:scale-110">
                <metal.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-2">{metal.name}</h3>
              <p className="text-muted-foreground mb-3">{metal.description}</p>
              
              <div className="border-t border-border pt-4 mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Ринкова ціна:</span>
                  <span className="font-bold text-primary">{metal.price}</span>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  {metal.usage}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-secondary/30 border-primary/20 animate-fade-in">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold mb-4">
                Екологічна цінність
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Каталізатори є критично важливими для екології. Вони зменшують викиди шкідливих 
                речовин в атмосферу на <strong className="text-primary">90-95%</strong>. Саме тому 
                в їх виробництві використовуються найдорожчі та найефективніші метали.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-3xl font-bold text-primary mb-1">90-95%</p>
                  <p className="text-sm text-muted-foreground">Зниження викидів</p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-3xl font-bold text-primary mb-1">3-10г</p>
                  <p className="text-sm text-muted-foreground">Метали в одному</p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-3xl font-bold text-primary mb-1">100%</p>
                  <p className="text-sm text-muted-foreground">Можна переробити</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
