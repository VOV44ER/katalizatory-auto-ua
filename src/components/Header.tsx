import { Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-display font-bold text-foreground">
              КАТАЛІЗАТОРИ <span className="text-primary">AUTO UA</span>
            </div>
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

          <a
            href="tel:+380631060301"
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-smooth"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold hidden lg:inline">+38 (063) 106-03-01</span>
          </a>
        </div>
      </div>
    </header>
  );
};