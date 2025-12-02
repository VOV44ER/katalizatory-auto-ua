import { Phone, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <a href="#top" className="text-2xl font-display font-bold text-foreground">
              КАТАЛІЗАТОРИ <span className="text-primary">AUTO UA</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#advantages" className="text-foreground hover:text-primary transition-smooth">
              Переваги
            </a>
            <a href="#prices" className="text-foreground hover:text-primary transition-smooth">
              Ціни
            </a>
            <a href="#process" className="text-foreground hover:text-primary transition-smooth">
              Процес
            </a>
            <a href="#estimate" className="text-foreground hover:text-primary transition-smooth">
              Онлайн оцінка
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth">
              Відгуки
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-smooth">
              Питання
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Контакти
            </a>
          </nav>

          {/* Desktop phone button */ }
          <a
            href="tel:+380631060301"
            className="hidden md:flex items-center space-x-2 text-primary hover:text-primary/80 transition-smooth"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold hidden lg:inline">+38 (063) 106-03-01</span>
          </a>

          {/* Mobile menu */ }
          <div className="md:hidden flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Відкрити меню"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border bg-card hover:bg-secondary/80 transition-smooth"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col gap-6 pt-14">
                <nav className="flex flex-col gap-4 text-lg">
                  <a href="#advantages" className="hover:text-primary transition-smooth">
                    Переваги
                  </a>
                  <a href="#prices" className="hover:text-primary transition-smooth">
                    Ціни
                  </a>
                  <a href="#process" className="hover:text-primary transition-smooth">
                    Процес
                  </a>
                  <a href="#estimate" className="hover:text-primary transition-smooth">
                    Онлайн оцінка
                  </a>
                  <a href="#testimonials" className="hover:text-primary transition-smooth">
                    Відгуки
                  </a>
                  <a href="#faq" className="hover:text-primary transition-smooth">
                    Питання
                  </a>
                  <a href="#contact" className="hover:text-primary transition-smooth">
                    Контакти
                  </a>
                </nav>

                <div className="mt-auto pt-4 border-t border-border flex flex-col gap-3">
                  <a
                    href="tel:+380631060301"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-accent py-3 font-semibold hover:shadow-glow transition-smooth"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Подзвонити</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};