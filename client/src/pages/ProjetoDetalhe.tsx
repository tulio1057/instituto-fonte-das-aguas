import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Heart,
  Users,
  ArrowLeft,
} from "lucide-react";
import { PROJETOS_DETALHES } from "@/data/projetos_detalhes";
import { ROUTES } from "@/config";

export default function ProjetoDetalhe() {
  // Capturar o ID da rota
  const [match, params] = useRoute("/projetos/:id");

  if (!match) {
    return null;
  }

  // Encontrar o projeto correspondente
  const projeto = PROJETOS_DETALHES.find((p) => p.id === params?.id);

  // Se projeto não encontrado, redirecionar
  if (!projeto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Projeto não encontrado</h1>
          <Link href={ROUTES.projetos}>
            <Button>Voltar para Projetos</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Botão Voltar - Fixed Position */}
      <div className="fixed top-24 left-4 md:left-8 z-40">
        <Link href={ROUTES.projetos}>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="gradient-primary text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {projeto.titulo}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              {projeto.descricaoCurta}
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Coluna Principal (2/3) */}
            <div className="lg:col-span-2">
              {/* Descrição Longa */}
              <div className="mb-12">
                <h2 className="font-display text-3xl font-bold mb-6">
                  Sobre o Projeto
                </h2>
                <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                  {projeto.descricaoLonga}
                </p>
              </div>

              {/* Objetivos */}
              <div className="mb-12">
                <h2 className="font-display text-3xl font-bold mb-6">
                  Nossos Objetivos
                </h2>
                <div className="space-y-3">
                  {projeto.objetivos.map((objetivo, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground/80 text-lg">
                        {objetivo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impacto */}
              {projeto.impacto && (
                <div className="mb-12 p-6 rounded-lg bg-primary/10 border-l-4 border-primary">
                  <h3 className="font-display text-xl font-bold mb-2 text-primary">
                    Nosso Impacto
                  </h3>
                  <p className="text-lg text-foreground/80">{projeto.impacto}</p>
                </div>
              )}

              {/* Galeria de Fotos */}
              <div className="mb-12">
                <h2 className="font-display text-3xl font-bold mb-6">
                  Galeria
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projeto.fotos.map((foto, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-lg aspect-video bg-muted"
                    >
                      <img
                        src={foto}
                        alt={`${projeto.titulo} - Foto ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback para imagem não carregada
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar (1/3) - Sticky CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-4">
                <Card className="border-none shadow-xl overflow-hidden">
                  <div className="gradient-primary h-2" />
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-4 text-center">
                      Faça Parte Desta Transformação
                    </h3>

                    <p className="text-sm text-muted-foreground text-center mb-6">
                      Escolha como você quer contribuir para este projeto e
                      impactar vidas na nossa comunidade.
                    </p>

                    <div className="space-y-3">
                      <a href="https://fontedasaguas.paradoar.org/" target="_blank" rel="noopener noreferrer">
                        <Button
                          size="lg"
                          className="w-full bg-primary hover:bg-primary/90 text-white"
                        >
                          <Heart className="mr-2 h-5 w-5" />
                          Fazer uma Doação
                        </Button>
                      </a>

                      <Link href={ROUTES.voluntarios}>
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full"
                        >
                          <Users className="mr-2 h-5 w-5" />
                          Ser Voluntário
                        </Button>
                      </Link>
                    </div>

                    <div className="mt-6 pt-6 border-t space-y-2 text-sm text-center text-muted-foreground">
                      <p>
                        <strong>Cada contribuição</strong> faz diferença na vida
                        de quem precisa.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Card de Serviços Relacionados */}
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-display font-bold mb-4">
                      Outros Projetos
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Conheça outras iniciativas que estão transformando vidas
                      na comunidade.
                    </p>
                    <Link href={ROUTES.projetos}>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-full text-primary hover:text-primary hover:bg-primary/10"
                      >
                        Ver Todos os Projetos
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <Card className="border-none shadow-xl gradient-primary text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Inspire-se e Transforme Vidas
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Como você prefere contribuir hoje? Doe, voluntarie ou compartilhe
                conosco.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://fontedasaguas.paradoar.org/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 font-semibold"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Fazer uma Doação
                  </Button>
                </a>
                <Link href={ROUTES.voluntarios}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Ser Voluntário
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
