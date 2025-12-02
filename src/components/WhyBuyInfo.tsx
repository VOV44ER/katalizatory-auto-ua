import Image from "next/image";

export const WhyBuyInfo = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 animate-slide-in-left">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold">
                            Навіщо здійснюється скуповування каталізаторів і чи всі деталі підходять?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Каталізатор за термін експлуатації має зношення, тому точну кількість
                            дорогоцінних металів без спектрального аналізу визначити неможливо.
                            Через це більшість скупників перекладають усі ризики на клієнта,
                            називаючи орієнтовну ціну, яка може сягати лише 50% від його
                            реальної вартості.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            В Києві є всього кілька СТО, які роблять <span className="font-semibold text-foreground">правильну</span>{ " " }
                            оцінку каталізатора, адже вартість професійного спектрального
                            аналізатора стартує від <span className="font-semibold text-foreground">20 000$</span>. Ми працюємо саме
                            з таким обладнанням і показуємо клієнту весь процес оцінки.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Тільки у нас ви можете бути присутніми на будь-якому етапі оцінки
                            каталізатора: вирізка, помел, проведення спектрального аналізу.
                            Це гарантує чесний результат і максимально вигідну ціну для вас.
                        </p>
                    </div>

                    <div className="animate-slide-in-right">
                        <div className="bg-card rounded-3xl border border-border shadow-card p-6 lg:p-8 h-full flex flex-col gap-6">
                            <div className="relative w-full max-w-md mx-auto h-56 lg:h-64 rounded-2xl overflow-hidden">
                                <Image
                                    src="/elvatech.png"
                                    alt="Спектрометр Elvatech під час оцінки каталізатора"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 420px, 100vw"
                                    priority
                                />
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-bold mb-2">
                                    Прозора оцінка в режимі реального часу
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Ми використовуємо професійний спектрометр Elvatech для вимірювання вмісту
                                    <span className="font-semibold text-foreground"> Pt, Pd, Rh </span>
                                    (платина, паладій, родій) у вашому каталізаторі. Ви особисто
                                    бачите результати на екрані приладу та розумієте, з чого
                                    складається кінцева ціна.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4">
                                <div className="bg-background rounded-xl border border-border p-4">
                                    <p className="text-sm text-muted-foreground mb-1">
                                        Точність оцінки
                                    </p>
                                    <p className="text-2xl font-bold text-primary">до 1 ppm</p>
                                </div>
                                <div className="bg-background rounded-xl border border-border p-4">
                                    <p className="text-sm text-muted-foreground mb-1">
                                        Присутність клієнта
                                    </p>
                                    <p className="text-2xl font-bold text-primary">100%</p>
                                </div>
                                <div className="bg-background rounded-xl border border-border p-4">
                                    <p className="text-sm text-muted-foreground mb-1">
                                        Економія ризиків
                                    </p>
                                    <p className="text-2xl font-bold text-primary">+50%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


