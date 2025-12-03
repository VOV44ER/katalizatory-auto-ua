"use client";

import { Phone, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/hooks/use-language";

export const Header = () => {
  const { lang, setLang } = useLanguage();
  const isRu = lang === "ru";

  const t = {
    nav: {
      advantages: isRu ? "Преимущества" : "Переваги",
      prices: isRu ? "Цены" : "Ціни",
      process: isRu ? "Процесс" : "Процес",
      estimate: isRu ? "Онлайн оценка" : "Онлайн оцінка",
      testimonials: isRu ? "Отзывы" : "Відгуки",
      faq: isRu ? "Вопросы" : "Питання",
      contacts: isRu ? "Контакты" : "Контакти",
    },
    mobile: {
      openMenu: isRu ? "Открыть меню" : "Відкрити меню",
      call: isRu ? "Позвонить" : "Подзвонити",
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <a href="#top" className="text-2xl font-display font-bold text-foreground">
              KATALIZATORY <span className="text-primary">AUTO UA</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#advantages" className="text-foreground hover:text-primary transition-smooth">
              { t.nav.advantages }
            </a>
            <a href="#prices" className="text-foreground hover:text-primary transition-smooth">
              { t.nav.prices }
            </a>
            <a href="#process" className="text-foreground hover:text-primary transition-smooth">
              { t.nav.process }
            </a>
            <a href="#estimate" className="text-foreground hover:text-primary transition-smooth">
              { t.nav.estimate }
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth">
              { t.nav.testimonials }
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-smooth">
              { t.nav.faq }
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              { t.nav.contacts }
            </a>
          </nav>

          {/* Desktop controls */ }
          <a
            href="tel:+380631060301"
            className="hidden md:flex items-center space-x-2 text-primary hover:text-primary/80 transition-smooth"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold hidden lg:inline">+38 (063) 106-03-01</span>
          </a>

          <div className="hidden md:flex items-center gap-2 ml-4">
            <button
              type="button"
              onClick={ () => setLang("uk") }
              className={ `px-2 py-1 text-xs rounded-full border transition-smooth ${!isRu
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
                }` }
            >
              UA
            </button>
            <button
              type="button"
              onClick={ () => setLang("ru") }
              className={ `px-2 py-1 text-xs rounded-full border transition-smooth ${isRu
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
                }` }
            >
              RU
            </button>
          </div>

          {/* Mobile menu */ }
          <div className="md:hidden flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label={ t.mobile.openMenu }
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border bg-card hover:bg-secondary/80 transition-smooth"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col gap-6 pt-14">
                <nav className="flex flex-col gap-4 text-lg">
                  <a href="#advantages" className="hover:text-primary transition-smooth">
                    { t.nav.advantages }
                  </a>
                  <a href="#prices" className="hover:text-primary transition-smooth">
                    { t.nav.prices }
                  </a>
                  <a href="#process" className="hover:text-primary transition-smooth">
                    { t.nav.process }
                  </a>
                  <a href="#estimate" className="hover:text-primary transition-smooth">
                    { t.nav.estimate }
                  </a>
                  <a href="#testimonials" className="hover:text-primary transition-smooth">
                    { t.nav.testimonials }
                  </a>
                  <a href="#faq" className="hover:text-primary transition-smooth">
                    { t.nav.faq }
                  </a>
                  <a href="#contact" className="hover:text-primary transition-smooth">
                    { t.nav.contacts }
                  </a>
                </nav>

                <div className="mt-auto pt-4 border-t border-border flex flex-col gap-3">
                  <a
                    href="tel:+380631060301"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-accent py-3 font-semibold hover:shadow-glow transition-smooth"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{ t.mobile.call }</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={ () => setLang("uk") }
                      className={ `flex-1 px-2 py-2 text-sm rounded-full border transition-smooth ${!isRu
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
                        }` }
                    >
                      UA
                    </button>
                    <button
                      type="button"
                      onClick={ () => setLang("ru") }
                      className={ `flex-1 px-2 py-2 text-sm rounded-full border transition-smooth ${isRu
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
                        }` }
                    >
                      RU
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};