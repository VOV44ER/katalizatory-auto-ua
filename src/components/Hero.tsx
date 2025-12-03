"use client";

import { useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
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
      description: "Наш менеджер зв'яжеться з вами протягом 5 хвилин",
    });
    setName("");
    setPhone("");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */ }
      <div
        className="absolute inset-0 z-0"
        style={ {
          // В Next.js импорт изображения даёт объект, поэтому используем heroBg.src
          backgroundImage: `url(${typeof heroBg === "string" ? heroBg : heroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        } }
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Content */ }
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */ }
          <div className="animate-slide-in-left">
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              ВИГІДНА СКУПКА
              <br />
              <span className="text-primary">КАТАЛІЗАТОРІВ</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-6">
              Продайте свій каталізатор з вигодою до <span className="text-primary font-bold">40 000 грн!</span>
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm text-muted-foreground">Ми в соцмережах:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/people/%D0%9A%D0%B0%D1%82%D0%B0%D0%BB%D1%96%D0%B7%D0%B0%D1%82%D0%BE%D1%80%D0%B8-AUTO-UA/61559600826808/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label="Facebook KATALIZATORY AUTO UA"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/katalizatory_auto_ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label="Instagram KATALIZATORY AUTO UA"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@katalizatory_auto_podil?_r=1&_t=ZS-91t0CjLo3j2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label="TikTok KATALIZATORY AUTO UA"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.5 6.5c.6.6 1.3 1.1 2.1 1.5.4.2.8.3 1.2.4V11c-.5 0-1-.1-1.5-.2-.7-.2-1.4-.5-2.1-.9v6.1c0 2.9-2.3 5-5.3 5-1 0-1.9-.2-2.7-.7-.9-.5-1.5-1.1-2-2-.5-.8-.7-1.8-.7-2.8 0-2.9 2.1-5.1 5.1-5.1.4 0 .7 0 1 .1v3.1c-.3-.1-.6-.2-1-.2-1.2 0-2.1.9-2.1 2.1 0 1.2.9 2.1 2.1 2.1 1.2 0 2.1-.9 2.1-2.1V3h3c.1.8.3 1.6.7 2.3.2.5.6.9 1 1.2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">5+ років</div>
                  <div className="text-sm text-muted-foreground">на ринку</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">10 000+</div>
                  <div className="text-sm text-muted-foreground">викупів</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */ }
          <div className="animate-slide-in-right">
            <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-2xl font-display font-bold mb-2">
                Отримати консультацію
              </h3>
              <p className="text-muted-foreground mb-6">
                Менеджер зв'яжеться з Вами протягом 5 хвилин
              </p>

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
                  Відправити
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Натискаючи кнопку, ви погоджуєтесь з умовами обробки персональних даних
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */ }
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};