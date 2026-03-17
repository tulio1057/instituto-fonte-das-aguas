import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Users,
  ArrowRight,
} from "lucide-react";
import { PROJETOS_DETALHES } from "@/data/projetos_detalhes";
import { ROUTES } from "@/config";

export default function Projetos() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nossos Projetos
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Conheça as iniciativas que estão transformando vidas na nossa comunidade
            </p>
          </div>
        </div>
      </section>

      {/* Projetos Detalhados */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Conheça Nossos <span className="text-gradient">{PROJETOS_DETALHES.length} Projetos</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Cada projeto contribui para diferentes dimensões da transformação social
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {PROJETOS_DETALHES.map((projeto) => (
                <Link
                  key={projeto.id}
                  href={`${ROUTES.projetos}/${projeto.id}`}
                >
                  <Card className="border-none shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="font-display text-lg font-bold mb-3">
                        {projeto.titulo}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                        {projeto.descricaoCurta}
                      </p>
                      <div className="mt-4 pt-4 border-t flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary">
                          Saiba mais
                        </span>
                        <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <Card className="border-none shadow-xl gradient-primary text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Seja Parte da Transformação
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Cada projeto precisa do seu apoio para continuar transformando vidas. 
                Escolha como você quer contribuir e faça a diferença hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://fontedasaguas.paradoar.org/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                    Fazer uma Doação
                    <Heart className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link href={ROUTES.voluntarios}>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                    Ser Voluntário
                    <Users className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
