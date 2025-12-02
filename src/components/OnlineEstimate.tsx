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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedImages(files);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Заявка надіслана!",
        description: "Наш менеджер зв'яжеться з вами протягом 5 хвилин",
      });
      setIsSubmitting(false);
      setSelectedImages([]);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="estimate" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Онлайн <span className="text-primary">оцінка</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Завантажте фото каталізатора та отримайте попередню оцінку вартості
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
                    placeholder="+380 (XX) XXX-XX-XX"
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
                  <Select required>
                    <SelectTrigger className="border-border">
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
                  placeholder="Наприклад: Camry, X5, E-Class"
                  className="border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="photos" className="flex items-center gap-2">
                  <Upload className="w-4 h-4 text-primary" />
                  Фото каталізатора
                </Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-smooth cursor-pointer">
                  <input
                    id="photos"
                    type="file"
                    multiple
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
                        ? `Вибрано файлів: ${selectedImages.length}`
                        : "PNG, JPG до 10MB (можна декілька)" }
                    </p>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">Додаткова інформація</Label>
                <Textarea
                  id="comment"
                  placeholder="Опишіть стан каталізатора або додайте будь-яку іншу інформацію"
                  className="border-border focus:border-primary min-h-[100px]"
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
