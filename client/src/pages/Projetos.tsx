import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, HandHeart, Home, Heart, Users, 
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

      {/* 4 Frentes de Atuação */}
      <section className="section-padding bg-gradient-to-b from-muted/20 to-transparent">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Nossas 4 Frentes de <span className="text-gradient">Atuação</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Conheça os pilares que sustentam nosso trabalho de transformação
              </p>
            </div>

            {/* Frente 1 */}
            <div className="mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-full gradient-primary flex-shrink-0 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-primary">
                        Frente 1: Vínculos para o Bem-Estar
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Projetos focados no fortalecimento de relações humanas e cuidado integral:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">Mamãe na Fonte</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">CELEBRE</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">Atendimento Nutricional</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">Atendimento Psicológico</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">Consultoria Jurídica</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Frente 2 */}
            <div className="mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-full gradient-secondary flex-shrink-0 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-secondary">
                        Frente 2: Nutrição e Dignidade
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Projetos dedicados à segurança alimentar e promoção da dignidade:
                      </p>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-sm font-medium">Mesa da Vida - Segurança Alimentar e Partilha Comunitária</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Frente 3 */}
            <div className="mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent flex-shrink-0 flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-accent">
                        Frente 3: Inclusão pelo Esporte
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Projetos que utilizam o esporte como ferramenta de transformação:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-sm font-medium">Bola pra Frente</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-sm font-medium">Tatame da Vida</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-sm font-medium">Vida em Movimento</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        <strong>Modalidades:</strong> Jiu-Jitsu, Ballet, Futebol e Capoeira
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Frente 4 */}
            <div className="mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-full gradient-primary flex-shrink-0 flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-primary">
                        Frente 4: Proteja a Infância
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Projetos focados na proteção e conscientização sobre direitos infantis:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">Juntos pela Infância Segura</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">Campanhas de Conscientização</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Educação e Saúde */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary">Educação</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <strong>Fonte Educa:</strong> Oferecemos reforço escolar, apoio pedagógico 
                    e ensino de línguas estrangeiras para ampliar oportunidades de desenvolvimento.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex-shrink-0 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-secondary">Saúde</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <strong>Visão da Vida:</strong> Realização de exames de vista e distribuição 
                    de óculos para garantir acesso à saúde visual.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action - Conheça as Frentes */}
            <Card className="border-none shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-12 text-center">
                <h3 className="font-display text-2xl font-bold mb-4">Conheça Detalhes de Cada Frente</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  Quer saber mais sobre como cada frente de atuação funciona e quais são todos os 
                  projetos e iniciativas que desenvolvemos? Visite nossa página completa de frentes.
                </p>
                <Link href="/frentes">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-semibold">
                    Acessar Página de Frentes
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
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

      <section className="section-padding bg-muted/30" id="mesa-da-vida">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold mb-4">
                  <HandHeart className="h-5 w-5" />
                  Segurança Alimentar
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Mesa da <span className="text-gradient">Vida</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  O projeto Mesa da Vida nasceu da necessidade de combater a fome e promover a 
                  segurança alimentar das famílias em situação de vulnerabilidade social. Levamos 
                  refeições nutritivas e dignidade para dezenas de famílias da nossa comunidade.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Além da distribuição de alimentos, o projeto promove momentos de partilha e 
                  fortalecimento de vínculos comunitários. Já realizamos ações especiais em obras 
                  da cidade, levando não apenas alimento, mas também palavras de esperança e 
                  conhecimento.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <p className="text-muted-foreground">Distribuição regular de refeições</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <p className="text-muted-foreground">Cestas básicas para famílias</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <p className="text-muted-foreground">Ações especiais em datas comemorativas</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <p className="text-muted-foreground">Orientação nutricional e alimentar</p>
                  </div>
                </div>

                <Link href="/doar">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    Contribuir com o Mesa da Vida
                    <Heart className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/mesa-da-vida.png" 
                  alt="Projeto Mesa da Vida" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
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
