import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Як відбувається прорахунок вартості каталізаторів?",
    answer:
      "Ви залишаєте нам заявку на попередній прорахунок. Далі наш консультант зв'язується з вами та озвучує попередню оцінку вашого каталізатора. Потім ви приїжджаєте до нас зі своїм каталізатором або відправляєте його Новою Поштою. Оплата відбувається одразу після аналізу на місці, або як післяплата на пошті.",
  },
  {
    question: "Навіщо здавати каталізатори?",
    answer:
      "Усі каталізатори мають термін придатності, закладений виробником. У середньому він становить 100–130 тисяч кілометрів пробігу автомобіля, після чого каталізатор підлягає видаленню, щоб не шкодити роботі авто. Відпрацьований каталізатор — це, по суті, цінні метали, які залишилися всередині, і саме їх викуповує завод для виробництва нових каталізаторів.",
  },
  {
    question: "Де можна здати каталізатор у Києві?",
    answer:
      "Ми знаходимося за адресою м. Київ, вул. Новокостянтинівська, 1В. Перед візитом, будь ласка, попередьте нас за телефоном +38 (063) 106-03-01, щоб ми зарезервували для вас час на оцінку.",
  },
  {
    question: "Чи потрібно демонтувати каталізатор перед продажем?",
    answer: "Ні, демонтаж не обов'язковий. Наші фахівці можуть приїхати до вас, провести оцінку та за необхідності демонтувати каталізатор на місці. Ця послуга входить у вартість.",
  },
  {
    question: "Чи можна продати каталізатор онлайн?",
    answer: "Так, ви можете залишити заявку на сайті, надіслати фото каталізатора, і ми зробимо попередню оцінку. Після цього домовимось про зустріч для фінальної оцінки та оплати.",
  },
  {
    question: "Ви працюєте по всій Україні?",
    answer: "Так, ми викуповуємо каталізатори по всій території України. Для клієнтів з віддалених регіонів можливий виїзд нашого представника або організація доставки каталізатора до нас.",
  },
  {
    question: "Які документи потрібні для продажу?",
    answer: "Для продажу каталізатора достатньо вашого паспорта або ID-картки. Ми укладаємо офіційний договір купівлі-продажу, який підтверджує законність угоди.",
  },
  {
    question: "Чи можу я продати пошкоджений каталізатор?",
    answer: "Так, ми приймаємо каталізатори у будь-якому стані: нові, вживані, пошкоджені, деформовані. Вміст дорогоцінних металів зберігається навіть у пошкоджених каталізаторах, тому вони мають цінність.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Поширені <span className="text-primary">питання</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Відповіді на найчастіші запитання про викуп каталізаторів
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            { faqs.map((faq, index) => (
              <AccordionItem
                key={ index }
                value={ `item-${index}` }
                className="border border-border rounded-lg px-6 bg-card hover:shadow-card transition-smooth animate-slide-up"
                style={ { animationDelay: `${index * 0.05}s` } }
              >
                <AccordionTrigger className="text-left hover:text-primary transition-smooth py-6">
                  <span className="font-display font-semibold text-lg">
                    { faq.question }
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  { faq.answer }
                </AccordionContent>
              </AccordionItem>
            )) }
          </Accordion>

          <div className="mt-12 text-center p-8 bg-card rounded-2xl border border-border">
            <h3 className="text-xl font-display font-bold mb-2">
              Не знайшли відповідь на своє питання?
            </h3>
            <p className="text-muted-foreground mb-4">
              Наші менеджери з радістю проконсультують вас
            </p>
            <a
              href="tel:+380631060301"
              className="inline-block px-8 py-3 bg-gradient-accent rounded-lg font-bold hover:shadow-glow transition-smooth"
            >
              Зателефонувати зараз
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
