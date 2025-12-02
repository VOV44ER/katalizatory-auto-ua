import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const messengers = [
  {
    name: "Telegram",
    icon: "📱",
    url: "https://t.me/yourusername",
    color: "hover:bg-[#0088cc]",
  },
  {
    name: "Viber",
    icon: "💬",
    url: "viber://chat?number=%2B380123456789",
    color: "hover:bg-[#7360f2]",
  },
  {
    name: "WhatsApp",
    icon: "💚",
    url: "https://wa.me/380123456789",
    color: "hover:bg-[#25d366]",
  },
];

export const MessengerButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="lg"
            className="h-16 w-16 rounded-full shadow-glow hover:scale-110 transition-smooth bg-gradient-accent"
          >
            <MessageCircle className="h-7 w-7" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 mb-2">
          <div className="p-2">
            <p className="text-sm font-semibold mb-2 px-2">Напишіть нам:</p>
            {messengers.map((messenger) => (
              <DropdownMenuItem key={messenger.name} asChild>
                <a
                  href={messenger.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-3 py-3 cursor-pointer rounded-md transition-smooth ${messenger.color}`}
                >
                  <span className="text-2xl">{messenger.icon}</span>
                  <span className="font-semibold">{messenger.name}</span>
                </a>
              </DropdownMenuItem>
            ))}
          </div>
          
          <div className="border-t border-border pt-2 px-2 pb-2">
            <a
              href="tel:+380631060301"
              className="flex items-center gap-3 px-3 py-3 cursor-pointer rounded-md hover:bg-primary/10 transition-smooth"
            >
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold text-sm">Подзвонити</p>
                <p className="text-xs text-muted-foreground">+38 (063) 106-03-01</p>
              </div>
            </a>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
