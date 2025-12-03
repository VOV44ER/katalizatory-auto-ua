"use client";

import { useState } from "react";
import { Upload, Car, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";

const carBrands = ["Toyota", "BMW", "Mercedes-Benz", "Volkswagen", "Audi", "Lexus", "Honda", "Mazda", "Ford", "Інше"];

export const OnlineEstimate = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { lang } = useLanguage();
  const isRu = lang === "ru";

  const text = {
    title: isRu ? "Онлайн" : "Онлайн",
    titleHighlight: isRu ? "оценка" : "оцінка",
    description: isRu
      ? "Мы оперативно оценим ваш катализатор с помощью спектрального анализа или по фото и данным, которые вы отправите через форму. После анализа уточняем окончательную стоимость и согласуем выплату."
      : "Ми оперативно оцінимо ваш каталізатор за допомогою спектрального аналізу або за фото та даними, які ви надішлете через форму. Після аналізу уточнюємо остаточну вартість і погоджуємо виплату.",
    invalidPhoneTitle: isRu ? "Некорректный номер телефона" : "Некоректний номер телефону",
    invalidPhoneDescription: isRu
      ? "Укажите, пожалуйста, украинский номер в формате +380 (XX) XXX-XX-XX."
      : "Вкажіть, будь ласка, український номер у форматі +380 (XX) XXX-XX-XX.",
    fileTooBigTitle: isRu ? "Слишком большой файл" : "Занадто великий файл",
    fileTooBigDescription: isRu
      ? "Максимальный размер фото — 10MB. Пожалуйста, выберите файл поменьше."
      : "Максимальний розмір фото — 10MB. Оберіть, будь ласка, менший файл.",
    nameLabel: isRu ? "Ваше имя" : "Ваше ім'я",
    namePlaceholder: isRu ? "Введите ваше имя" : "Введіть ваше ім'я",
    phoneLabel: isRu ? "Телефон" : "Телефон",
    phonePlaceholder: "+380 (XX) XXX-XX-XX",
    brandLabel: isRu ? "Марка авто" : "Марка авто",
    brandPlaceholder: isRu ? "Выберите марку" : "Оберіть марку",
    yearLabel: isRu ? "Год выпуска" : "Рік випуску",
    modelLabel: isRu ? "Модель авто" : "Модель авто",
    modelPlaceholder: isRu ? "Например: Camry, X5, E-Class" : "Наприклад: Camry, X5, E-Class",
    photoLabel: isRu ? "Фото катализатора (1 шт.)" : "Фото каталізатора (1 шт.)",
    photoClick: isRu ? "Нажмите, чтобы загрузить фото" : "Натисніть для завантаження фото",
    photoSelectedPrefix: isRu ? "Выбранное фото" : "Вибране фото",
    photoHint: isRu ? "PNG, JPG до 10MB (1 фото)" : "PNG, JPG до 10MB (1 фото)",
    commentLabel: isRu ? "Дополнительная информация" : "Додаткова інформація",
    commentPlaceholder: isRu
      ? "Опишите состояние катализатора или добавьте любую другую информацию"
      : "Опишіть стан каталізатора або додайте будь-яку іншу інформацію",
    submitSending: isRu ? "Отправка..." : "Надсилання...",
    submitDefault: isRu ? "Получить оценку" : "Отримати оцінку",
    footerText: isRu
      ? "Наш менеджер свяжется с вами в течение 5 минут для уточнения деталей"
      : "Наш менеджер зв'яжеться з вами протягом 5 хвилин для уточнення деталей",
    successTitle: isRu ? "Заявка отправлена!" : "Заявка надіслана!",
    successDescription: isRu
      ? "Наш менеджер свяжется с вами в течение 5 минут"
      : "Наш менеджер зв'яжеться з вами протягом 5 хвилин",
    errorTitle: isRu ? "Ошибка отправки" : "Помилка відправки",
    errorDescription: isRu
      ? "Не удалось отправить заявку. Пожалуйста, попробуйте ещё раз."
      : "Не вдалося надіслати заявку. Спробуйте, будь ласка, ще раз.",
  };

  const isValidUaPhone = (value: string) => {
    if (value.includes("_") || value.length < 17) {
      return false;
    }
    const digits = value.replace(/\D/g, "");
    return /^380\d{9}$/.test(digits);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const [first] = files;

      if (first) {
        const maxSizeBytes = 10 * 1024 * 1024;
        if (first.size > maxSizeBytes) {
          toast({
            title: text.fileTooBigTitle,
            description: text.fileTooBigDescription,
            variant: "destructive",
          });
          e.target.value = "";
          setSelectedImages([]);
          return;
        }

        setSelectedImages([first]);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const phone = String(formData.get("phone") || "");

    if (!isValidUaPhone(phone)) {
      toast({
        title: text.invalidPhoneTitle,
        description: text.invalidPhoneDescription,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const hasPhoto = selectedImages.length > 0;

      if (hasPhoto) {
        const photoForm = new FormData();
        photoForm.append("name", String(formData.get("name") || ""));
        photoForm.append("phone", phone);
        photoForm.append("brand", String(formData.get("brand") || ""));
        photoForm.append("year", String(formData.get("year") || ""));
        photoForm.append("model", String(formData.get("model") || ""));
        photoForm.append("comment", String(formData.get("comment") || ""));
        photoForm.append("photo", selectedImages[0]);

        const response = await fetch("/api/telegram-photo", {
          method: "POST",
          body: photoForm,
        });

        if (!response.ok) {
          throw new Error("Failed to send message with photo");
        }
      } else {
        const payload: Record<string, unknown> = {
          name: formData.get("name") || "",
          phone,
          brand: formData.get("brand") || "",
          year: formData.get("year") || "",
          model: formData.get("model") || "",
          comment: formData.get("comment") || "",
        };

        const response = await fetch("/api/telegram", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }
      }

      toast({
        title: text.successTitle,
        description: text.successDescription,
      });
      setSelectedImages([]);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      toast({
        title: text.errorTitle,
        description: text.errorDescription,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="estimate" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            { text.title } <span className="text-primary">{ text.titleHighlight }</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            { text.description }
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-border">
            <form onSubmit={ handleSubmit } className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    { text.nameLabel }
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={ text.namePlaceholder }
                    required
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    { text.phoneLabel }
                  </Label>
                  <PhoneInput
                    id="phone"
                    name="phone"
                    placeholder={ text.phonePlaceholder }
                    inputMode="tel"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="brand" className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-primary" />
                    { text.brandLabel }
                  </Label>
                  <Select required name="brand">
                    <SelectTrigger className="h-12 rounded-lg border-2 border-border bg-card px-4 text-base">
                      <SelectValue placeholder={ text.brandPlaceholder } />
                    </SelectTrigger>
                    <SelectContent>
                      { carBrands.map((brand) => (
                        <SelectItem key={ brand } value={ brand.toLowerCase() }>
                          { brand }
                        </SelectItem>
                      )) }
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    { text.yearLabel }
                  </Label>
                  <Input
                    id="year"
                    type="number"
                    name="year"
                    placeholder="2010"
                    min="1990"
                    max="2025"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="model">{ text.modelLabel }</Label>
                <Input
                  id="model"
                  name="model"
                  placeholder={ text.modelPlaceholder }
                  className="border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="photos" className="flex items-center gap-2">
                  <Upload className="w-4 h-4 text-primary" />
                  { text.photoLabel }
                </Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-smooth cursor-pointer">
                  <input
                    id="photos"
                    type="file"
                    accept="image/*"
                    onChange={ handleImageChange }
                    className="hidden"
                  />
                  <label htmlFor="photos" className="cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <p className="text-foreground font-semibold mb-2">
                      { text.photoClick }
                    </p>
                    <p className="text-sm text-muted-foreground">
                      { selectedImages.length > 0
                        ? `${text.photoSelectedPrefix}: ${selectedImages[0]?.name || "1 файл"}`
                        : text.photoHint }
                    </p>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">{ text.commentLabel }</Label>
                <Textarea
                  id="comment"
                  name="comment"
                  placeholder={ text.commentPlaceholder }
                  className="min-h-[100px] rounded-lg border-2 border-border bg-card px-4 py-3 text-base focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg"
                disabled={ isSubmitting }
              >
                { isSubmitting ? text.submitSending : text.submitDefault }
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                { text.footerText }
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
