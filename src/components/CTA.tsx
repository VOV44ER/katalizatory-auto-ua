"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export const CTA = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { lang } = useLanguage();
  const isRu = lang === "ru";

  const text = {
    invalidPhoneTitle: isRu ? "Некорректный номер телефона" : "Некоректний номер телефону",
    invalidPhoneDescription: isRu
      ? "Укажите, пожалуйста, украинский номер в формате +380 (XX) XXX-XX-XX."
      : "Вкажіть, будь ласка, український номер у форматі +380 (XX) XXX-XX-XX.",
    successTitle: isRu ? "Заявка получена!" : "Заявку отримано!",
    successDescription: isRu
      ? "Наш менеджер свяжется с вами в ближайшее время"
      : "Наш менеджер зв'яжеться з вами найближчим часом",
    heading: isRu ? "Готовы продать ваш" : "Готові продати ваш",
    headingHighlight: isRu ? "катализатор?" : "каталізатор?",
    subheading: isRu
      ? "Оставьте заявку прямо сейчас и получите бесплатную консультацию и оценку стоимости."
      : "Залиште заявку прямо зараз і отримайте безкоштовну консультацію та оцінку вартості.",
    callLabel: isRu ? "Звоните" : "Телефонуйте",
    workingHoursLabel: isRu ? "Работаем" : "Працюємо",
    workingHoursValue: isRu ? "Пн-Вс: 9:00 - 21:00" : "Пн-Нд: 9:00 - 21:00",
    formNamePlaceholder: isRu ? "Ваше имя" : "Ваше ім'я",
    formPhonePlaceholder: "+380 (XX) XXX-XX-XX",
    formButton: isRu ? "Получить консультацию" : "Отримати консультацію",
    responseTime: isRu
      ? "Ответ в течение 5 минут"
      : "Відповідь протягом 5 хвилин",
  };

  const isValidUaPhone = (value: string) => {
    // Проверяем, что номер заполнен полностью (нет символов маски)
    if (value.includes("_") || value.length < 17) {
      return false;
    }
    const digits = value.replace(/\D/g, "");
    // Должно быть 12 цифр: 380 + 9 цифр номера
    return /^380\d{9}$/.test(digits);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidUaPhone(phone)) {
      toast({
        title: text.invalidPhoneTitle,
        description: text.invalidPhoneDescription,
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source: "CTA form",
          name,
          phone,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: text.successTitle,
        description: text.successDescription,
      });
      setName("");
      setPhone("");
    } catch (error) {
      console.error(error);
      toast({
        title: isRu ? "Ошибка отправки" : "Помилка відправки",
        description: isRu
          ? "Не удалось отправить заявку. Пожалуйста, попробуйте ещё раз."
          : "Не вдалося надіслати заявку. Спробуйте, будь ласка, ще раз.",
        variant: "destructive",
      });
    }
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
                  { text.heading } <span className="text-primary">{ text.headingHighlight }</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  { text.subheading }
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{ text.callLabel }</div>
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
                      <div className="font-semibold">{ text.workingHoursLabel }</div>
                      <div className="text-muted-foreground">{ text.workingHoursValue }</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form */ }
              <div>
                <form onSubmit={ handleSubmit } className="space-y-4">
                  <Input
                    type="text"
                    placeholder={ text.formNamePlaceholder }
                    name="name"
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                    required
                  />
                  <PhoneInput
                    placeholder={ text.formPhonePlaceholder }
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
                    { text.formButton }
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  { text.responseTime }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};