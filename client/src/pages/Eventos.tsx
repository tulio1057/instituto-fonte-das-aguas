import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Heart, Music, Gift, Smile } from "lucide-react";

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
                <a href="https://fontedasaguas.paradoar.org/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                    Faça uma Doação
                    <Heart className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
