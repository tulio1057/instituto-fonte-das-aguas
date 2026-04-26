import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, ArrowRight } from "lucide-react";
import { PROJETOS_DETALHES } from "@/data/projetos_detalhes";
import { FRENTES } from "@/data/frentes";
import { ROUTES } from "@/config";

// Mapeamento de cores para cada frente
const CORES_FRENTES: Record<
  string,
  {
    background: string;
    gradient: string;
    badge: string;
    acento: string;
  }
> = {
  "vinculos-bem-estar": {
    background: "bg-blue-50",
    gradient: "from-blue-600 to-blue-700",
    badge: "bg-blue-600",
    acento: "text-blue-600",
  },
  "nutricao-dignidade": {
    background: "bg-green-50",
    gradient: "from-green-600 to-green-700",
    badge: "bg-green-600",
    acento: "text-green-600",
  },
  "inclusao-esporte": {
    background: "bg-orange-50",
    gradient: "from-orange-600 to-orange-700",
    badge: "bg-orange-600",
    acento: "text-orange-600",
  },
  "proteja-infancia": {
    background: "bg-rose-50",
    gradient: "from-rose-600 to-rose-700",
    badge: "bg-rose-600",
    acento: "text-rose-600",
  },
};

export default function Projetos() {
  // Agrupar projetos por frente
  const projetosPorFrente = FRENTES.map((frente) => ({
    frente,
    projetos: PROJETOS_DETALHES.filter((p) => p.frente === frente.id),
  }));

  // Projetos fora de uma frente (extras)
  const projetosExtras = PROJETOS_DETALHES.filter(
    (p) => !FRENTES.some((f) => f.id === p.frente)
  );

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

      {/* Introdução */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              O Instituto Fonte das Águas organiza seu trabalho em 4 frentes de atuação estratégicas,
              cada uma focada em diferentes dimensões do desenvolvimento humano e transformação social.
              Em cada frente, desenvolvemos projetos específicos que trabalham em sinergia para
              promover o bem-estar integral das crianças, adolescentes e famílias do Bairro Industrial.
            </p>
          </div>
        </div>
      </section>

      {/* Seções por Frente */}
      {projetosPorFrente.map((item) => {
        const cores = CORES_FRENTES[item.frente.id];
        return (
          <section
            key={item.frente.id}
            id={item.frente.id}
            className={`py-16 md:py-24 ${cores.background}`}
          >
            <div className="container">
              <div className="max-w-5xl mx-auto">
                {/* Título e Descrição da Frente */}
                <div className="mb-16">
                  <div className="flex items-center gap-6 mb-10">
                    <div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${cores.gradient} flex-shrink-0 flex items-center justify-center shadow-lg`}
                    >
                      <div className="w-12 h-12 text-white text-center flex items-center justify-center font-bold text-2xl">
                        {item.frente.numero}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className={`font-display text-3xl md:text-4xl font-bold mb-3 ${cores.acento}`}>
                        {item.frente.titulo}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {item.frente.descricao}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed pl-0 md:pl-32">
                    {item.frente.descricaoLonga}
                  </p>
                </div>

                {/* Grid de Projetos da Frente */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {item.projetos.map((projeto) => (
                    <Link
                      key={projeto.id}
                      href={`${ROUTES.projetos}/${projeto.id}`}
                    >
                      <Card className="border-none shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full bg-white">
                        <CardContent className="p-6 flex flex-col h-full">
                          <h3 className="font-display text-lg font-bold mb-3">
                            {projeto.titulo}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                            {projeto.descricaoCurta}
                          </p>
                          <div className="mt-4 pt-4 border-t flex items-center justify-between">
                            <span className={`text-sm font-semibold ${cores.acento}`}>
                              Saiba mais
                            </span>
                            <ArrowRight className={`h-4 w-4 ${cores.acento} transition-transform`} />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Projetos Complementares (extras) */}
      {projetosExtras.length > 0 && (
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Projetos Complementares
                </h2>
                <p className="text-lg text-muted-foreground">
                  Iniciativas adicionais que ampliam nosso impacto
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projetosExtras.map((projeto) => (
                  <Link
                    key={projeto.id}
                    href={`${ROUTES.projetos}/${projeto.id}`}
                  >
                    <Card className="border-none shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full bg-white">
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
                          <ArrowRight className="h-4 w-4 text-primary transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Final */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="border-none shadow-xl gradient-primary text-white overflow-hidden">
            <CardContent className="p-12 md:p-16 text-center">
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
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary"
                  >
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
