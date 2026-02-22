import { Link } from "wouter";
import { Heart, Mail, MapPin, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t mt-auto">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="font-display font-bold text-lg">Instituto Fonte das Águas</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Trabalhando para promover a dignidade humana e a justiça social em Aracaju, Sergipe.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/instituto.fontedasaguas"
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
                href="https://wa.me/5579996402118"
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
              <li>
                <Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Nossos Projetos
                </Link>
              </li>
              <li>
                <Link href="/voluntarios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Seja Voluntário
                </Link>
              </li>
              <li>
                <Link href="/transparencia" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Transparência
                </Link>
              </li>
            </ul>
          </div>

          {/* Ação */}
          <div className="space-y-2">
            <h4 className="font-display font-semibold text-base">Faça a Diferença</h4>
            <div className="flex flex-col gap-2 pt-1">
              <Link href="/voluntarios" className="px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-xs font-medium text-center whitespace-nowrap">
                Seja Voluntário
              </Link>
              <Link href="/doar" className="px-3 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors text-xs font-medium text-center whitespace-nowrap">
                Faça uma Doação
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Rua Adezinho da Costa Pinto, 149<br />Bairro Industrial, Aracaju - SE<br />CEP: 49065-010</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+5579991439647" className="hover:text-primary transition-colors">
                  (79) 9 9143-9647
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:contato@fontedasaguas.org" className="hover:text-primary transition-colors">
                  contato@fontedasaguas.org
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <strong>PIX:</strong> 52250050000120
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Instituto Fonte das Águas. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Feito com <Heart className="h-4 w-4 text-red-500 fill-red-500" /> para transformar vidas
            </p>
          </div>
          
          {/* Créditos Tulip.jdev ajustado */}
          <div className="mt-6 w-max mx-auto">
            <p className="text-xs text-muted-foreground text-center">
              Produzido por{" "}
              <a 
                href="mailto:tulio.jdev@gmail.com" 
                className="text-primary hover:underline transition-colors"
              >
                tulio.jdev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}