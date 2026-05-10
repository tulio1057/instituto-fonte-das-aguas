import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Award, ArrowRight, HandHeart, Home as HomeIcon, GraduationCap } from "lucide-react";
import { useSiteContent } from "@/contexts/ContentContext";

// Ícones e cores ciclados para os números de impacto
const ICONES = [Users, Heart, Award, HandHeart, Target, Award, Users, Heart];
const CORES = ["text-primary", "text-secondary", "text-accent", "text-primary", "text-secondary", "text-accent", "text-primary", "text-secondary"];
const BG_CORES = ["bg-primary/10", "bg-secondary/10", "bg-accent/10", "bg-primary/10", "bg-secondary/10", "bg-accent/10", "bg-primary/10", "bg-secondary/10"];

export default function Home() {
  const { content } = useSiteContent();
  const { instituto, numerosImpacto, projetos } = content;

  // Usa os 3 primeiros projetos do content; se vazio, mostra cards estáticos de fallback
  const projetosDestaque = projetos.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Trabalhando para promover a dignidade humana e a justiça social
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            {instituto.descricao}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a href="https://fontedasaguas.paradoar.org/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gradient-secondary text-white font-semibold text-lg px-8 py-6 hover:scale-105 transition-transform">
                Faça sua Doação
                <Heart className="ml-2 h-5 w-5 fill-white" />
              </Button>
            </a>
            <Link href="/voluntarios">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6">
                Seja Voluntário
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Números de Impacto — dinâmicos */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Números que <span className="text-gradient">Impactam</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {numerosImpacto.map((item, i) => {
              const Icone = ICONES[i % ICONES.length];
              const cor = CORES[i % CORES.length];
              const bg = BG_CORES[i % BG_CORES.length];
              return (
                <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${bg} mb-4`}>
                      <Icone className={`h-7 w-7 ${cor}`} />
                    </div>
                    <h3 className={`font-display text-3xl font-bold ${cor} mb-2`}>{item.numero}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{item.descricao}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nosso Objetivo */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src="/community.png" alt="Comunidade Instituto Fonte das Águas" className="rounded-2xl shadow-2xl w-full h-auto" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Quem é o Instituto <span className="text-gradient">Fonte das Águas?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                O Instituto Fonte das Águas nasceu em meio à pandemia da Covid-19, fruto de um movimento
                da Graça Igreja Batista, que há mais de 45 anos desenvolve ações sociais no Bairro Industrial.
                Em 2022, foi fundado oficialmente para ampliar e estruturar esse cuidado com a comunidade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                O nome carrega significado profundo: no Bairro Industrial, antigas fontes no passado abasteciam
                Aracaju. Assim como aquelas fontes foram essenciais para a vida, o Instituto nasce para ser
                fonte de esperança e dignidade para pessoas cuja história foi marcada por exclusão.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Estamos presentes para ser um espaço de acolhimento, proteção e segurança para crianças,
                adolescentes e suas famílias, fortalecendo vínculos, promovendo oportunidades e trabalhando
                pela dignidade humana e justiça social.
              </p>
              <Link href="/sobre">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Conheça Nossa História Completa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Nossos <span className="text-gradient">Pilares</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guiados por princípios sólidos, trabalhamos para transformar vidas e construir um futuro melhor
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-primary">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Promover um espaço seguro e acolhedor para resgatar a dignidade de crianças, adolescentes
                  e suas famílias.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-secondary mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-secondary">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência em desenvolvimento e capacitação de pessoas para serem protagonistas
                  das suas histórias.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-accent">Valores</h3>
                <ul className="space-y-3">
                  {["Amor ao próximo", "Justiça", "Integridade", "Respeito", "Dignidade"].map((v) => (
                    <li key={v} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="font-medium">{v}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque — dinâmicos */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Nossos <span className="text-gradient">Projetos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça as iniciativas que estão transformando vidas na nossa comunidade
            </p>
          </div>

          {projetosDestaque.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projetosDestaque.map((projeto, i) => {
                const gradients = ["gradient-primary", "gradient-secondary", "bg-accent"];
                const Icone = [GraduationCap, HandHeart, HomeIcon][i % 3];
                const cores = ["text-primary", "text-secondary", "text-accent"];
                return (
                  <Card key={projeto.id} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden">
                    <div className={`h-48 ${gradients[i % 3]} flex items-center justify-center`}>
                      <Icone className="h-20 w-20 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className={`font-display text-xl font-bold mb-3 ${cores[i % 3]}`}>{projeto.titulo}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{projeto.descricaoCurta}</p>
                      <Link href={`/projetos/${projeto.id}`}>
                        <Button variant="link" className={`p-0 h-auto ${cores[i % 3]} font-semibold`}>
                          Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            // Fallback estático quando não há projetos no content.json
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden">
                <div className="h-48 gradient-primary flex items-center justify-center">
                  <GraduationCap className="h-20 w-20 text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold mb-3 text-primary">Vida em Movimento</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">Projeto de capacitação e desenvolvimento integral para crianças e adolescentes.</p>
                  <Link href="/projetos#vida-em-movimento">
                    <Button variant="link" className="p-0 h-auto text-primary font-semibold">Saiba mais <ArrowRight className="ml-1 h-4 w-4" /></Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden">
                <div className="h-48 gradient-secondary flex items-center justify-center">
                  <HandHeart className="h-20 w-20 text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold mb-3 text-secondary">Mesa da Vida</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">Projeto de segurança alimentar para famílias em vulnerabilidade social.</p>
                  <Link href="/projetos#mesa-da-vida">
                    <Button variant="link" className="p-0 h-auto text-secondary font-semibold">Saiba mais <ArrowRight className="ml-1 h-4 w-4" /></Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden">
                <div className="h-48 bg-accent flex items-center justify-center">
                  <HomeIcon className="h-20 w-20 text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold mb-3 text-accent">Projeto Boa Obra</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">Reforma de moradias de famílias em vulnerabilidade, promovendo dignidade.</p>
                  <Link href="/projetos#boa-obra">
                    <Button variant="link" className="p-0 h-auto text-accent font-semibold">Saiba mais <ArrowRight className="ml-1 h-4 w-4" /></Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/projetos">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                Ver Todos os Projetos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding gradient-primary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Seja Fonte de Esperança</h2>
              <p className="text-xl mb-4 leading-relaxed opacity-90">
                Transforme vidas no Bairro Industrial. Sua contribuição faz a diferença real na vida
                de centenas de crianças, adolescentes e famílias vulneráveis.
              </p>
              <p className="text-xl mb-8 leading-relaxed opacity-90"><strong>Juntos pela dignidade humana</strong></p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://fontedasaguas.paradoar.org/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                    Doe Agora <Heart className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link href="/voluntarios">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                    Seja Voluntário <Users className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img src="/impact.jpg" alt="Impacto Social" className="rounded-2xl shadow-2xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
