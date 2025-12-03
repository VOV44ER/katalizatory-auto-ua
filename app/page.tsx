import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Advantages } from "@/components/Advantages";
import { WhyBuyInfo } from "@/components/WhyBuyInfo";
import { PriceList } from "@/components/PriceList";
import { Process } from "@/components/Process";
import { OnlineEstimate } from "@/components/OnlineEstimate";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { MessengerButtons } from "@/components/MessengerButtons";
import Script from "next/script";

export default function HomePage() {
  return (
    <div className="min-h-screen" id="top">
      <Script
        id="ld-json-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={ {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoPartsStore",
            name: "KATALIZATORY AUTO UA",
            url: "https://katalizatory-auto.com",
            description:
              "Скупка та викуп автомобільних каталізаторів і сажових фільтрів по всій Україні. Спектральний аналіз, чесні ціни, виплата за 5 хвилин.",
            telephone: "+380631060301",
            address: {
              "@type": "PostalAddress",
              streetAddress: "вул. Новокостянтинівська, 1В",
              addressLocality: "Київ",
              addressCountry: "UA",
            },
            areaServed: "UA",
            sameAs: [
              "https://www.facebook.com/people/%D0%9A%D0%B0%D1%82%D0%B0%D0%BB%D1%96%D0%B7%D0%B0%D1%82%D0%BE%D1%80%D0%B8-AUTO-UA/61559600826808/",
              "https://www.instagram.com/katalizatory_auto_ua/",
              "https://www.tiktok.com/@katalizatory_auto_podil?_r=1&_t=ZS-91t0CjLo3j2",
            ],
          }),
        } }
      />

      <Script
        id="ld-json-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={ {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Як відбувається прорахунок вартості каталізаторів?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ви залишаєте нам заявку на попередній прорахунок. Далі наш консультант зв'язується з вами та озвучує попередню оцінку вашого каталізатора. Потім ви приїжджаєте до нас зі своїм каталізатором або відправляєте його Новою Поштою. Оплата відбувається одразу після аналізу на місці, або як післяплата на пошті.",
                },
              },
              {
                "@type": "Question",
                name: "Навіщо здавати каталізатори?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Усі каталізатори мають термін придатності, закладений виробником. У середньому він становить 100–130 тисяч кілометрів пробігу автомобіля, після чого каталізатор підлягає видаленню, щоб не шкодити роботі авто. Відпрацьований каталізатор — це, по суті, цінні метали, які залишилися всередині, і саме їх викуповує завод для виробництва нових каталізаторів.",
                },
              },
              {
                "@type": "Question",
                name: "Де можна здати каталізатор у Києві?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ми знаходимося за адресою м. Київ, вул. Новокостянтинівська, 1В. Перед візитом, будь ласка, попередьте нас за телефоном +38 (063) 106-03-01, щоб ми зарезервували для вас час на оцінку.",
                },
              },
              {
                "@type": "Question",
                name: "Чи потрібно демонтувати каталізатор перед продажем?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ні, демонтаж не обов'язковий. Наші фахівці можуть приїхати до вас, провести оцінку та за необхідності демонтувати каталізатор на місці. Ця послуга входить у вартість.",
                },
              },
              {
                "@type": "Question",
                name: "Чи можна продати каталізатор онлайн?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Так, ви можете залишити заявку на сайті, надіслати фото каталізатора, і ми зробимо попередню оцінку. Після цього домовимось про зустріч для фінальної оцінки та оплати.",
                },
              },
            ],
          }),
        } }
      />

      <Header />
      <Hero />
      <Advantages />
      <PriceList />
      <WhyBuyInfo />
      <Process />
      <OnlineEstimate />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <MessengerButtons />
    </div>
  );
}


