"use client";

import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/hooks/use-language";

export const Footer = () => {
  const { lang } = useLanguage();
  const isRu = lang === "ru";

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */ }
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              KATALIZATORY <span className="text-primary">AUTO UA</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              { isRu
                ? "Профессиональный выкуп автомобильных катализаторов по всей Украине. Честные цены, быстрые выплаты."
                : "Професійна скупка автомобільних каталізаторів по всій Україні. Чесні ціни, швидкі виплати." }
            </p>
            <div className="flex items-center gap-4">
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

          {/* Contacts */ }
          <div>
            <h4 className="text-lg font-display font-bold mb-4">
              { isRu ? "Контакты" : "Контакти" }
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+380631060301" className="hover:text-primary transition-smooth">
                  +38 (063) 106-03-01
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>
                  { isRu
                    ? "г. Киев, ул. Новоконстантиновская, 1В"
                    : "м. Київ, вул. Новокостянтинівська, 1В" }
                </span>
              </li>
            </ul>
            <div className="mt-4 space-y-1 text-sm">
              <a
                href="/katalizator"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                { isRu ? "Что такое катализатор и как мы его выкупаем" : "Що таке каталізатор і як ми його викуповуємо" }
              </a>
              <a
                href="/prodati-katalizator"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                { isRu ? "Продать катализатор дорого" : "Продати каталізатор дорого" }
              </a>
              <a
                href="/sazhovi-filtry"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                { isRu ? "Выкуп сажевых фильтров (DPF)" : "Викуп сажових фільтрів (DPF)" }
              </a>
              <a
                href="/metalichni-katalizatory"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                { isRu ? "Металлические катализаторы" : "Металеві каталізатори" }
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative h-64 rounded-xl overflow-hidden border border-border">
              <Image
                src="/office.png"
                alt={ isRu ? "Офис KATALIZATORY AUTO UA" : "Офіс KATALIZATORY AUTO UA" }
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="w-full h-64 rounded-xl overflow-hidden border border-border">
              <iframe
                title={
                  isRu
                    ? "Карта расположения KATALIZATORY AUTO UA"
                    : "Карта розташування KATALIZATORY AUTO UA"
                }
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.4783549129006!2d30.492558199999994!3d50.47808149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdee3fc59b17%3A0xea58ce64a5e35bc!2z0KHQutGD0L_QutCwINC60LDRgtCw0LvRltC30LDRgtC-0YDRltCyICJLQVRBTElaQVRPUllfQVVUT19VQSI!5e1!3m2!1suk!2sua!4v1764754564754!5m2!1suk!2sua"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>
            &copy; { new Date().getFullYear() } KATALIZATORY AUTO UA.{ " " }
            { isRu ? "Все права защищены." : "Всі права захищені." }
          </p>
        </div>
      </div>
    </footer>
  );
};