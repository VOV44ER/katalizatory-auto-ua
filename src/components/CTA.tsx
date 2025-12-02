"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle } from "lucide-react";

export const CTA = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const isValidUaPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return /^380\d{9}$/.test(digits) || /^0\d{9}$/.test(digits);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidUaPhone(phone)) {
      toast({
        title: "Некоректний номер телефону",
        description:
          "Вкажіть, будь ласка, український номер у форматі +380XXXXXXXXX або 0XXXXXXXXX.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Заявку отримано!",
      description: "Наш менеджер зв'яжеться з вами найближчим часом",
    });
    setName("");
    setPhone("");
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-8 lg:p-12 shadow-card border border-border animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Content */ }
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                  Готові продати ваш <span className="text-primary">каталізатор?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Залиште заявку прямо зараз і отримайте безкоштовну консультацію та оцінку вартості
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Телефонуйте</div>
                      <a href="tel:+380631060301" className="text-primary hover:text-primary/80 transition-smooth">
                        +38 (063) 106-03-01
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Працюємо</div>
                      <div className="text-muted-foreground">Пн-Нд: 9:00 - 21:00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form */ }
              <div>
                <form onSubmit={ handleSubmit } className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Ваше ім'я"
                    name="name"
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="+380 (XX) XXX-XX-XX"
                    name="phone"
                    inputMode="tel"
                    value={ phone }
                    onChange={ (e) => setPhone(e.target.value) }
                    required
                  />
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    Отримати консультацію
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Відповідь протягом 5 хвилин
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};