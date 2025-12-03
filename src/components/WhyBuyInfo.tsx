"use client";

import Image from "next/image";
import { useLanguage } from "@/hooks/use-language";

export const WhyBuyInfo = () => {
    const { lang } = useLanguage();
    const isRu = lang === "ru";

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 animate-slide-in-left">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold">
                            { isRu
                                ? "Зачем выкупают катализаторы и подходят ли любые детали?"
                                : "Навіщо здійснюється скуповування каталізаторів і чи всі деталі підходять?" }
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            { isRu
                                ? "За время эксплуатации катализатор зношается, поэтому точное количество драгоценных металлов без спектрального анализа определить невозможно. Из‑за этого большинство скупщиков перекладывают все риски на клиента, называя ориентировочную цену, которая может составлять лишь до 50% от его реальной стоимости."
                                : "Каталізатор за термін експлуатації має зношення, тому точну кількість дорогоцінних металів без спектрального аналізу визначити неможливо. Через це більшість скупників перекладають усі ризики на клієнта, називаючи орієнтовну ціну, яка може сягати лише 50% від його реальної вартості." }
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            { isRu ? (
                                <>
                                    В Киеве є всього кілька скупок, які роблять{ " " }
                                    <span className="font-semibold text-foreground">корректную</span> оценку
                                    катализатора, ведь стоимость профессионального спектрального анализатора
                                    начинается от{ " " }
                                    <span className="font-semibold text-foreground">20 000$</span>. Мы работаем
                                    именно с таким оборудованием и показываем клиенту весь процесс оценки.
                                </>
                            ) : (
                                <>
                                    В Києві є всього кілька скупок, які роблять{ " " }
                                    <span className="font-semibold text-foreground">правильну</span> оцінку
                                    каталізатора, адже вартість професійного спектрального аналізатора стартує від{ " " }
                                    <span className="font-semibold text-foreground">20 000$</span>. Ми працюємо саме
                                    з таким обладнанням і показуємо клієнту весь процес оцінки.
                                </>
                            ) }
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            { isRu
                                ? "Только у нас вы можете присутствовать на любом этапе оценки катализатора: вырезка, помол, проведение спектрального анализа. Это гарантирует честный результат и максимально выгодную цену для вас."
                                : "Тільки у нас ви можете бути присутніми на будь-якому етапі оцінки каталізатора: вирізка, помел, проведення спектрального аналізу. Це гарантує чесний результат і максимально вигідну ціну для вас." }
                        </p>
                    </div>

                    <div className="animate-slide-in-right">
                        <div className="bg-card rounded-3xl border border-border shadow-card p-6 lg:p-8 h-full flex flex-col gap-6">
                            <div className="grid grid-cols-3 gap-3 w-full max-w-md mx-auto">
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-border hover:border-primary transition-colors">
                                    <Image
                                        src="/olympus.png"
                                        alt={
                                            isRu
                                                ? "Спектрометр Olympus во время оценки катализатора"
                                                : "Спектрометр Olympus під час оцінки каталізатора"
                                        }
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 1024px) 140px, 33vw"
                                    />
                                </div>
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-border hover:border-primary transition-colors">
                                    <Image
                                        src="/olympus1.png"
                                        alt={
                                            isRu
                                                ? "Спектрометр Olympus во время оценки катализатора"
                                                : "Спектрометр Olympus під час оцінки каталізатора"
                                        }
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 1024px) 140px, 33vw"
                                        priority
                                    />
                                </div>
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-border hover:border-primary transition-colors">
                                    <Image
                                        src="/olympus2.png"
                                        alt={
                                            isRu
                                                ? "Спектрометр Olympus во время оценки катализатора"
                                                : "Спектрометр Olympus під час оцінки каталізатора"
                                        }
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 1024px) 140px, 33vw"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-bold mb-2">
                                    { isRu ? "Прозрачная оценка в режиме реального времени" : "Прозора оцінка в режимі реального часу" }
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    { isRu ? (
                                        <>
                                            Мы используем профессиональный спектрометр Olympus для измерения содержания
                                            <span className="font-semibold text-foreground"> Pt, Pd, Rh </span>
                                            (платина, палладий, родий) в вашем катализаторе. Вы лично видите результаты на
                                            экране прибора и понимаете, из чего складывается конечная цена.
                                        </>
                                    ) : (
                                        <>
                                            Ми використовуємо професійний спектрометр Olympus для вимірювання вмісту
                                            <span className="font-semibold text-foreground"> Pt, Pd, Rh </span>
                                            (платина, паладій, родій) у вашому каталізаторі. Ви особисто бачите результати
                                            на екрані приладу та розумієте, з чого складається кінцева ціна.
                                        </>
                                    ) }
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4">
                                <div className="bg-background rounded-xl border border-border p-4">
                                    <p className="text-sm text-muted-foreground mb-1">
                                        { isRu ? "Точность оценки" : "Точність оцінки" }
                                    </p>
                                    <p className="text-2xl font-bold text-primary">до 1 ppm</p>
                                </div>
                                <div className="bg-background rounded-xl border border-border p-4">
                                    <p className="text-sm text-muted-foreground mb-1">
                                        { isRu ? "Присутствие клиента" : "Присутність клієнта" }
                                    </p>
                                    <p className="text-2xl font-bold text-primary">100%</p>
                                </div>
                                <div className="bg-background rounded-xl border border-border p-4">
                                    <p className="text-sm text-muted-foreground mb-1">
                                        { isRu ? "Снижение рисков" : "Економія ризиків" }
                                    </p>
                                    <p className="text-2xl font-bold text-primary">+50%</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="relative w-full max-w-[11rem] mx-auto rounded-2xl overflow-hidden border border-border shadow-card">
                                    <Image
                                        src="/catalyst-milling-drum.png"
                                        alt={
                                            isRu
                                                ? "Бочка для помола катализаторов"
                                                : "Бочка для помелу каталізаторів"
                                        }
                                        width={ 800 }
                                        height={ 600 }
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
                                    { isRu
                                        ? "После помола в специальной бочке проба катализатора попадает на спектрометр Olympus для точного анализа."
                                        : "Після помелу у спеціальній бочці проба каталізатора потрапляє на спектрометр Olympus для точного аналізу." }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

