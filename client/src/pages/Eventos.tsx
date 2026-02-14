import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Heart, Share2, ArrowRight, Music, Gift, Smile } from "lucide-react";

export default function Eventos() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Eventos e Mídia
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Acompanhe os eventos anuais e apareça nas principais mídias do Instituto
            </p>
          </div>
        </div>
      </section>

      {/* Eventos Anuais */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Eventos <span className="text-gradient">Anuais</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Conheça os momentos especiais que celebramos e com você a cada ano
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Paz.coa */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Gift className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-primary">Paz.coa</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nossa celebração especial da Páscoa, onde compartilhamos momentos de fé, 
                    alegria e fraternidade com a comunidade. Um tempo de renovação e esperança.
                  </p>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold text-primary">📅 Celebrado anualmente na Páscoa</p>
                  </div>
                </CardContent>
              </Card>

              {/* Natal na Fonte */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                    <Music className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-secondary">Natal na Fonte</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O maior evento do ano! Celebramos o nascimento de Jesus com apresentações, 
                    distribuição de presentes e muita alegria para as crianças e famílias.
                  </p>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold text-secondary">🎄 Celebrado em dezembro</p>
                  </div>
                </CardContent>
              </Card>

              {/* Criança na Fonte */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                    <Smile className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-accent">Criança na Fonte</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Um evento dedicado inteiramente às crianças, com jogos, atividades lúdicas, 
                    diversão e muito aprendizado. Um dia especial celebrando cada criança.
                  </p>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold text-accent">👶 Celebrado anualmente</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Descrição detalhada */}
            <Card className="border-none shadow-lg bg-muted/30 mb-8">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold mb-4">Por Que Participar?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Celebração Comunitária
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Momentos que reúnem famílias, voluntários e amigos do Instituto em celebrações 
                      significativas e transformadoras.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5 text-secondary" />
                      Fortalecimento de Vínculos
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Nesses eventos, reforçamos os laços comunitários e o sentimento de pertencimento 
                      que caracteriza nosso Instituto.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-accent" />
                      Oportunidade de Apoio
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Os eventos também são ocasiões para voluntários e doadores apoiarem nossas 
                      ações e tornarem a diferença ainda maior.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Music className="h-5 w-5 text-primary" />
                      Diversão e Aprendizado
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Cada evento é planejado para oferecer momentos de diversão, aprendizado e 
                      crescimento para crianças e famílias.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Na Mídia */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Na <span className="text-gradient">Mídia</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Acompanhe as principais matérias e reportagens sobre o Instituto Fonte das Águas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Placeholder para matérias */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <Share2 className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4">Matéria em Destaque 1</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Conheça a história de como o Instituto Fonte das Águas está transformando 
                    vidas no bairro Industrial através de seus projetos inovadores.
                  </p>
                  <button className="text-primary font-semibold flex items-center gap-2 group/btn">
                    Leia mais
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                    <Share2 className="h-8 w-8 text-secondary group-hover:text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4">Matéria em Destaque 2</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Reportagem especial sobre o Projeto Vida em Movimento e sua primeira formatura 
                    com 24 alunos de Jiu-Jitsu formados em 2024.
                  </p>
                  <button className="text-secondary font-semibold flex items-center gap-2 group/btn">
                    Leia mais
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                    <Share2 className="h-8 w-8 text-accent group-hover:text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4">Matéria em Destaque 3</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Conheça o impacto social do Projeto Mesa da Vida na segurança alimentar de 
                    famílias vulneráveis no bairro Industrial.
                  </p>
                  <button className="text-accent font-semibold flex items-center gap-2 group/btn">
                    Leia mais
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <Share2 className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4">Matéria em Destaque 4</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Histórias inspiradoras de crianças e adolescentes que transformaram suas vidas 
                    através dos projetos e programas do Instituto.
                  </p>
                  <button className="text-primary font-semibold flex items-center gap-2 group/btn">
                    Leia mais
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* Partners/Parcerias */}
            <Card className="border-none shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-12 text-center">
                <h3 className="font-display text-2xl font-bold mb-6">Parcerias</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  O Instituto Fonte das Águas tem o apoio de diversos parceiros que acreditam em 
                  nossa missão. Se sua empresa ou mídia também quer fazer parte dessa transformação, 
                  entre em contato conosco.
                </p>
                <a 
                  href="mailto:contato@institutofontedasaguas.org"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Trabalhar Conosco
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container">
          <Card className="border-none shadow-xl gradient-primary text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Acompanhe Nossas Ações
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Fique por dentro de todos os eventos, notícias e principais momentos do Instituto 
                Fonte das Águas. Seja parte dessa história!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/voluntarios">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                    Seja Voluntário
                    <Users className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/doar">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                    Faça uma Doação
                    <Heart className="ml-2 h-5 w-5" />
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
