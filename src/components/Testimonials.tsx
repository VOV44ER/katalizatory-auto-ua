import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Олександр М.",
    city: "Київ",
    rating: 5,
    text: "Продав каталізатор від BMW X5. Оцінка була чесною, виплатили відразу готівкою. Дуже задоволений співпрацею!",
    initials: "ОМ",
  },
  {
    name: "Ірина В.",
    city: "Львів",
    rating: 5,
    text: "Швидко, професійно, без зайвих питань. Ціна виявилася навіть вищою, ніж очікувала. Рекомендую!",
    initials: "ІВ",
  },
  {
    name: "Дмитро К.",
    city: "Одеса",
    rating: 5,
    text: "Працюю з цією компанією вже другий рік. Завжди найкращі ціни на ринку. Партнерам можна довіряти.",
    initials: "ДК",
  },
  {
    name: "Сергій П.",
    city: "Харків",
    rating: 5,
    text: "Продав каталізатор від Toyota Prius. Менеджер проконсультував по телефону, приїхали додому, оцінили та розрахувались за 30 хвилин.",
    initials: "СП",
  },
  {
    name: "Марія Л.",
    city: "Дніпро",
    rating: 5,
    text: "Спочатку були сумніви, але все пройшло чудово. Прозора оцінка, адекватна ціна, швидка виплата. Дякую!",
    initials: "МЛ",
  },
  {
    name: "Андрій Т.",
    city: "Запоріжжя",
    rating: 5,
    text: "Продав декілька каталізаторів оптом. Найвища ціна серед усіх, кому дзвонив. Оперативність на вищому рівні.",
    initials: "АТ",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Відгуки наших <span className="text-primary">клієнтів</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Понад 10,000 задоволених клієнтів по всій Україні
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-card transition-smooth hover:-translate-y-1 border-border animate-slide-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-12 h-12 bg-primary/20 border-2 border-primary/30">
                  <AvatarFallback className="bg-primary/20 text-primary font-bold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-display font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Середня оцінка наших клієнтів
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary">5.0</span>
            <span className="text-muted-foreground">/ 5.0</span>
          </div>
        </div>
      </div>
    </section>
  );
};
