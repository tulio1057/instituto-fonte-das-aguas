import { MessageCircle } from "lucide-react";
import { useSiteContent } from "@/contexts/ContentContext";

export default function WhatsAppButton() {
  const { content } = useSiteContent();
  const whatsapp = content.instituto.whatsapp || "5579996402118";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Instituto Fonte das Águas.");
  const whatsappUrl = `https://wa.me/${whatsapp}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-whatsapp-button
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale conosco!
      </span>
    </a>
  );
}
