import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */ }
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              КАТАЛІЗАТОРИ <span className="text-primary">AUTO UA</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Професійна скупка автомобільних каталізаторів по всій Україні. Чесні ціни, швидкі виплати.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/people/%D0%9A%D0%B0%D1%82%D0%B0%D0%BB%D1%96%D0%B7%D0%B0%D1%82%D0%BE%D1%80%D0%B8-AUTO-UA/61559600826808/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Facebook КАТАЛІЗАТОРИ AUTO UA"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/katalizatory_auto_ua/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Instagram КАТАЛІЗАТОРИ AUTO UA"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */ }
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Навігація</h4>
            <ul className="space-y-2">
              <li>
                <a href="#advantages" className="text-muted-foreground hover:text-primary transition-smooth">
                  Переваги
                </a>
              </li>
              <li>
                <a href="#process" className="text-muted-foreground hover:text-primary transition-smooth">
                  Процес
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Контакти
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */ }
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Контакти</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+380631060301" className="hover:text-primary transition-smooth">
                  +38 (063) 106-03-01
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@kat-auto-ua.site" className="hover:text-primary transition-smooth">
                  info@kat-auto-ua.site
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>м. Київ, вул. Новокостянтинівська, 1В</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <div className="w-full h-64 rounded-xl overflow-hidden border border-border">
            <iframe
              title="Карта розташування КАТАЛІЗАТОРИ AUTO UA"
              src="https://www.google.com/maps?q=50.4784143,30.4918894&z=16&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; { new Date().getFullYear() } КАТАЛІЗАТОРИ AUTO UA. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};