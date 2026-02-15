import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, Home, Heart, Users, 
  ArrowRight, CheckCircle2, Target
} from "lucide-react";

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
                Conheça Nossos <span className="text-gradient">11 Projetos</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Cada projeto contribui para diferentes dimensões da transformação social
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Mamãe na Fonte */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold mb-3">Mamãe na Fonte</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Suporte integral para gestantes, lactantes e mães com orientações nutricionais, acompanhamento emocional e conexão com redes de assistência.
                  </p>
                </CardContent>
              </Card>

              {/* CELEBRE */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold mb-3">CELEBRE</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Celebração de feminilidade, empoderamento e cuidado com atividades de estética, saúde e valorização da mulher como protagonista.
                  </p>
                </CardContent>
              </Card>

              {/* Atendimento Nutricional */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold mb-3">Atendimento Nutricional</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Avaliação nutricional, orientações alimentares e planos customizados para saúde e bem-estar da comunidade.
                  </p>
                </CardContent>
              </Card>

              {/* Atendimento Psicológico */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold mb-3">Atendimento Psicológico</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Acompanhamento psicológico para crianças, adolescentes e famílias como espaço seguro para processamento emocional.
                  </p>
                </CardContent>
              </Card>

              {/* Consultoria Jurídica */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold mb-3">Consultoria Jurídica</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Orientações jurídicas e apoio na documentação com garantia de direitos e cidadania para famílias vulneráveis.
                  </p>
                </CardContent>
              </Card>

              {/* Mesa da Vida */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold mb-3">Mesa da Vida</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Segurança alimentar e partilha comunitária com distribuição de refeições e cestas básicas para famílias em situação de vulnerabilidade.
                  </p>
                </CardContent>
              </Card>

              {/* Bola pra Frente */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold mb-3">Bola pra Frente</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Futebol como ferramenta de inclusão, disciplina e desenvolvimento para crianças e adolescentes do bairro.
                  </p>
                </CardContent>
              </Card>

              {/* Tatame da Vida */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold mb-3">Tatame da Vida</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Jiu-Jitsu para desenvolvimento de disciplina, respeito e autoconfiança com 24 alunos formados em 2024.
                  </p>
                </CardContent>
              </Card>

              {/* Vida em Movimento */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold mb-3">Vida em Movimento</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Programa integrado de esportes (Ballet, Capoeira), educação e desenvolvimento pessoal de crianças e adolescentes.
                  </p>
                </CardContent>
              </Card>

              {/* Juntos pela Infância Segura */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold mb-3">Juntos pela Infância</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Proteção integral da infância com acompanhamento, orientação e rede de proteção para crianças e adolescentes.
                  </p>
                </CardContent>
              </Card>

              {/* Campanhas de Conscientização */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold mb-3">Campanhas Conscient.</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Campanhas educativas sobre direitos infantis, abuso, exploração e direitos fundamentais de crianças.
                  </p>
                </CardContent>
              </Card>

              {/* Fonte Educa */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold mb-3">Fonte Educa</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Reforço escolar, apoio pedagógico e ensino de línguas estrangeiras para ampliação de oportunidades educacionais.
                  </p>
                </CardContent>
              </Card>

              {/* Visão da Vida */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold mb-3">Visão da Vida</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Saúde visual com realização de exames de vista e distribuição de óculos para acesso à saúde visual.
                  </p>
                </CardContent>
              </Card>
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
                <Link href="/doar">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                    Fazer uma Doação
                    <Heart className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/voluntarios">
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
