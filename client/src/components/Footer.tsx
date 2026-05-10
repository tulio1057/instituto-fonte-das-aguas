import { Link } from "wouter";
import { Heart, Mail, MapPin, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useSiteContent } from "@/contexts/ContentContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { content } = useSiteContent();
  const { instituto } = content;

  const whatsappUrl = `https://wa.me/${instituto.whatsapp}`;

  return (
    <footer className="bg-muted/30 border-t mt-auto">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="font-display font-bold text-lg">{instituto.nome}</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {instituto.slogan}
            </p>
            <div className="flex gap-3">
              <a
                href={instituto.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/instituto.fontedasaguas"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { href: "/sobre", label: "Sobre Nós" },
                { href: "/projetos", label: "Nossos Projetos" },
                { href: "/voluntarios", label: "Seja Voluntário" },
                { href: "/transparencia", label: "Transparência" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ação */}
          <div className="space-y-2">
            <h4 className="font-display font-semibold text-base">Faça a Diferença</h4>
            <div className="flex flex-col gap-2 pt-1">
              <Link href="/voluntarios" className="px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-xs font-medium text-center whitespace-nowrap">
                Seja Voluntário
              </Link>
              <a href="https://fontedasaguas.paradoar.org/" target="_blank" rel="noopener noreferrer" className="px-3 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors text-xs font-medium text-center whitespace-nowrap inline-block">
                Faça uma Doação
              </a>
            </div>
          </div>

          {/* Contato — dinâmico */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  {instituto.endereco}<br />
                  {instituto.bairro}, {instituto.cidade} - {instituto.estado}<br />
                  CEP: {instituto.cep}
                </span>
              </li>
              {instituto.telefone && (
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                  <a href={`tel:+55${instituto.telefone.replace(/\D/g, "")}`} className="hover:text-primary transition-colors">
                    {instituto.telefone}
                  </a>
                </li>
              )}
              {instituto.email && (
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                  <a href={`mailto:${instituto.email}`} className="hover:text-primary transition-colors">
                    {instituto.email}
                  </a>
                </li>
              )}
              {instituto.pix && (
                <li className="text-sm text-muted-foreground">
                  <strong>PIX:</strong> {instituto.pix}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} {instituto.nome}. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Feito com <Heart className="h-4 w-4 text-red-500 fill-red-500" /> para transformar vidas
            </p>
          </div>
          <div className="mt-6 w-max mx-auto">
            <p className="text-xs text-muted-foreground text-center">
              Produzido por{" "}
              <a href="mailto:tulio.jdev@gmail.com" className="text-primary hover:underline transition-colors">
                tulio.jdev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
