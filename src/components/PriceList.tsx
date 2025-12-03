"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/use-language";

const catalysts = [
  {
    brand: "Toyota",
    models: [
      { name: "Camry 2.4", price: "2,500 - 6,000", typeUa: "Керамічний", typeRu: "Керамический" },
      { name: "RAV4 2.0", price: "2,000 - 5,000", typeUa: "Керамічний", typeRu: "Керамический" },
      { name: "Prius Hybrid", price: "2,500 - 18,000", typeUa: "Металевий", typeRu: "Металлический" },
    ],
  },
  {
    brand: "BMW",
    models: [
      { name: "3 Series", price: "2,500 - 10,000", typeUa: "Керамічний", typeRu: "Керамический" },
      { name: "5 Series", price: "2,500 - 18,000", typeUa: "Металевий", typeRu: "Металлический" },
      { name: "X5", price: "2,500 - 20,000", typeUa: "Металевий", typeRu: "Металлический" },
    ],
  },
  {
    brand: "Mercedes-Benz",
    models: [
      { name: "C-Class", price: "2,500 - 12,000", typeUa: "Керамічний", typeRu: "Керамический" },
      { name: "E-Class", price: "2,500 - 20,000", typeUa: "Металевий", typeRu: "Металлический" },
      { name: "ML-Class", price: "2,500 - 20,000", typeUa: "Металевий", typeRu: "Металлический" },
    ],
  },
  {
    brand: "Volkswagen",
    models: [
      { name: "Passat B6", price: "1,800 - 4,000", typeUa: "Керамічний", typeRu: "Керамический" },
      { name: "Touareg", price: "2,500 - 15,000", typeUa: "Металевий", typeRu: "Металлический" },
      { name: "Golf", price: "1,500 - 3,000", typeUa: "Керамічний", typeRu: "Керамический" },
    ],
  },
  {
    brand: "Audi",
    models: [
      { name: "A4", price: "2,500 - 8,000", typeUa: "Керамічний", typeRu: "Керамический" },
      { name: "A6", price: "2,500 - 20,000", typeUa: "Металевий", typeRu: "Металлический" },
      { name: "Q7", price: "2,500 - 20,000", typeUa: "Металевий", typeRu: "Металлический" },
    ],
  },
  {
    brand: "Lexus",
    models: [
      { name: "RX350", price: "2,500 - 20,000", typeUa: "Металевий", typeRu: "Металлический" },
      { name: "ES300", price: "2,500 - 14,000", typeUa: "Керамічний", typeRu: "Керамический" },
      { name: "GX470", price: "2,500 - 20,000", typeUa: "Металевий", typeRu: "Металлический" },
    ],
  },
];

export const PriceList = () => {
  const { lang } = useLanguage();
  const isRu = lang === "ru";

  return (
    <section id="prices" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            { isRu ? "Актуальные" : "Актуальні" } <span className="text-primary">{ isRu ? "цены" : "ціни" }</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            { isRu
              ? "Чаще всего люди сдают катализаторы таких брендов, как Audi, BMW, Hyundai, Kia, Volkswagen, Toyota. Цены начинаются от 70$ и могут быть выше 1300$ — точную стоимость определяем после спектрального анализа состояния катализатора."
              : "Найчастіше люди здають каталізатори таких автомобільних брендів, як Audi, BMW, Hyundai, Kia, Volkswagen, Toyota. Ціни стартують від 70$ та можуть бути вище 1300$ — точну вартість визначаємо після спектрального аналізу стану каталізатора." }
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
                  { brand.models.length } { isRu ? "моделей" : "моделей" }
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
                        { isRu ? model.typeRu ?? model.typeUa : model.typeUa ?? model.typeRu }
                      </Badge>
                    </div>
                    <p className="text-primary font-bold">{ model.price } грн</p>
                  </div>
                )) }
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  { isRu
                    ? "* Цена зависит от состояния и типа катализатора"
                    : "* Ціна залежить від стану та типу каталізатора" }
                </p>
              </div>
            </Card>
          )) }
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-secondary/30 border-primary/20">
            <p className="text-lg font-semibold mb-2">
              { isRu ? "Не нашли свою модель? Позвоните нам!" : "Не знайшли свою модель? Зателефонуйте нам!" }
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
