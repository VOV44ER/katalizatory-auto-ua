import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const catalysts = [
  {
    brand: "Toyota",
    models: [
      { name: "Camry 2.4", price: "12,000 - 18,000", type: "Керамічний" },
      { name: "RAV4 2.0", price: "10,000 - 15,000", type: "Керамічний" },
      { name: "Prius Hybrid", price: "25,000 - 35,000", type: "Металевий" },
    ],
  },
  {
    brand: "BMW",
    models: [
      { name: "3 Series", price: "15,000 - 22,000", type: "Керамічний" },
      { name: "5 Series", price: "18,000 - 28,000", type: "Металевий" },
      { name: "X5", price: "20,000 - 30,000", type: "Металевий" },
    ],
  },
  {
    brand: "Mercedes-Benz",
    models: [
      { name: "C-Class", price: "16,000 - 24,000", type: "Керамічний" },
      { name: "E-Class", price: "20,000 - 32,000", type: "Металевий" },
      { name: "ML-Class", price: "22,000 - 35,000", type: "Металевий" },
    ],
  },
  {
    brand: "Volkswagen",
    models: [
      { name: "Passat B6", price: "8,000 - 12,000", type: "Керамічний" },
      { name: "Touareg", price: "15,000 - 25,000", type: "Металевий" },
      { name: "Golf", price: "6,000 - 10,000", type: "Керамічний" },
    ],
  },
  {
    brand: "Audi",
    models: [
      { name: "A4", price: "14,000 - 20,000", type: "Керамічний" },
      { name: "A6", price: "18,000 - 28,000", type: "Металевий" },
      { name: "Q7", price: "22,000 - 35,000", type: "Металевий" },
    ],
  },
  {
    brand: "Lexus",
    models: [
      { name: "RX350", price: "25,000 - 40,000", type: "Металевий" },
      { name: "ES300", price: "15,000 - 25,000", type: "Керамічний" },
      { name: "GX470", price: "20,000 - 32,000", type: "Металевий" },
    ],
  },
];

export const PriceList = () => {
  return (
    <section id="prices" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Актуальні <span className="text-primary">ціни</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ціни на популярні моделі каталізаторів. Точна вартість визначається після оцінки стану
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          { catalysts.map((brand, index) => (
            <Card
              key={ index }
              className="p-6 hover:shadow-card transition-smooth hover:-translate-y-1 border-border animate-slide-up"
              style={ { animationDelay: `${index * 0.1}s` } }
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-display font-bold">{ brand.brand }</h3>
                <Badge variant="secondary" className="text-xs">
                  { brand.models.length } моделей
                </Badge>
              </div>

              <div className="space-y-4">
                { brand.models.map((model, modelIndex) => (
                  <div
                    key={ modelIndex }
                    className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-smooth"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-semibold text-foreground">{ model.name }</p>
                      <Badge variant="outline" className="text-xs">
                        { model.type }
                      </Badge>
                    </div>
                    <p className="text-primary font-bold">{ model.price } грн</p>
                  </div>
                )) }
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  * Ціна залежить від стану та типу каталізатора
                </p>
              </div>
            </Card>
          )) }
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-secondary/30 border-primary/20">
            <p className="text-lg font-semibold mb-2">
              Не знайшли свою модель? Зателефонуйте нам!
            </p>
            <a
              href="tel:+380631060301"
              className="text-primary hover:text-primary/80 font-bold text-xl transition-smooth"
            >
              +38 (063) 106-03-01
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};
