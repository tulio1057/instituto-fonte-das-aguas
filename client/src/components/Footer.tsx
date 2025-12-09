import { Link } from "wouter";
import { Heart, Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { APP_LOGO } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t mt-auto">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={APP_LOGO} alt="Instituto Fonte das Águas" className="h-12 w-12" />
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
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Sobre Nós
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projetos">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Nossos Projetos
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/voluntarios">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Seja Voluntário
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/transparencia">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Transparência
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Projetos */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Projetos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/projetos#vida-em-movimento">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Vida em Movimento
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projetos#mesa-da-vida">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Mesa da Vida
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projetos#boa-obra">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Projeto Boa Obra
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/capacitacoes">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Capacitações
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Rua Adezinho da Costa Pinto, 149<br />Industrial, Aracaju - SE<br />CEP: 49065-010</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+5579996402118" className="hover:text-primary transition-colors">
                  (79) 9 9640-2118
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+5579988727134" className="hover:text-primary transition-colors">
                  (79) 9 8872-7134
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <span>PIX: 52.250.050/0001-20</span>
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
        </div>
      </div>
    </footer>
  );
}
