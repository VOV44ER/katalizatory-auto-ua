"use client";

import { useState } from "react";
import { Upload, Car, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const carBrands = ["Toyota", "BMW", "Mercedes-Benz", "Volkswagen", "Audi", "Lexus", "Honda", "Mazda", "Ford", "Інше"];

export const OnlineEstimate = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const isValidUaPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return /^380\d{9}$/.test(digits) || /^0\d{9}$/.test(digits);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const [first] = files;

      if (first) {
        const maxSizeBytes = 10 * 1024 * 1024;
        if (first.size > maxSizeBytes) {
          toast({
            title: "Занадто великий файл",
            description: "Максимальний розмір фото — 10MB. Оберіть, будь ласка, менший файл.",
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
        title: "Некоректний номер телефону",
        description:
          "Вкажіть, будь ласка, український номер у форматі +380XXXXXXXXX або 0XXXXXXXXX.",
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
        title: "Заявка надіслана!",
        description: "Наш менеджер зв'яжеться з вами протягом 5 хвилин",
      });
      setSelectedImages([]);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Помилка відправки",
        description: "Не вдалося надіслати заявку. Спробуйте, будь ласка, ще раз.",
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
            Онлайн <span className="text-primary">оцінка</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ми оперативно оцінимо ваш каталізатор за допомогою спектрального аналізу або за фото та
            даними, які ви надішлете через форму. Після аналізу уточнюємо остаточну вартість і
            погоджуємо виплату.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-border">
            <form onSubmit={ handleSubmit } className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Ваше ім'я
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Введіть ваше ім'я"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+380 (XX) XXX-XX-XX"
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
                    Марка авто
                  </Label>
                  <Select required name="brand">
                    <SelectTrigger className="h-12 rounded-lg border-2 border-border bg-card px-4 text-base">
                      <SelectValue placeholder="Оберіть марку" />
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
                    Рік випуску
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
                <Label htmlFor="model">Модель авто</Label>
                <Input
                  id="model"
                  name="model"
                  placeholder="Наприклад: Camry, X5, E-Class"
                  className="border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="photos" className="flex items-center gap-2">
                  <Upload className="w-4 h-4 text-primary" />
                  Фото каталізатора (1 шт.)
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
                      Натисніть для завантаження фото
                    </p>
                    <p className="text-sm text-muted-foreground">
                      { selectedImages.length > 0
                        ? `Вибране фото: ${selectedImages[0]?.name || "1 файл"}`
                        : "PNG, JPG до 10MB (1 фото)" }
                    </p>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">Додаткова інформація</Label>
                <Textarea
                  id="comment"
                  name="comment"
                  placeholder="Опишіть стан каталізатора або додайте будь-яку іншу інформацію"
                  className="min-h-[100px] rounded-lg border-2 border-border bg-card px-4 py-3 text-base focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg"
                disabled={ isSubmitting }
              >
                { isSubmitting ? "Надсилання..." : "Отримати оцінку" }
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Наш менеджер зв'яжеться з вами протягом 5 хвилин для уточнення деталей
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
