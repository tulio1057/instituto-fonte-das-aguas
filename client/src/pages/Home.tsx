import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Award, ArrowRight, HandHeart, Home as HomeIcon, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        
        <div className="container relative z-10 text-center text-white">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Dignidade Humana e Justiça Social
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Transformando vidas através do amor, educação e acolhimento na comunidade de Aracaju
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link href="/doar">
              <Button size="lg" className="gradient-secondary text-white font-semibold text-lg px-8 py-6 hover:scale-105 transition-transform">
                Faça sua Doação
                <Heart className="ml-2 h-5 w-5 fill-white" />
              </Button>
            </Link>
            <Link href="/voluntarios">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6">
                Seja Voluntário
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Números de Impacto */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-4xl font-bold text-primary mb-2">56</h3>
                <p className="text-muted-foreground font-medium">Voluntários Ativos</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-display text-4xl font-bold text-secondary mb-2">53</h3>
                <p className="text-muted-foreground font-medium">Famílias Assistidas</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-4xl font-bold text-accent mb-2">100+</h3>
                <p className="text-muted-foreground font-medium">Vidas Transformadas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nosso Objetivo */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/community.jpg" 
                alt="Comunidade Instituto Fonte das Águas" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Nosso <span className="text-gradient">Objetivo</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                O Instituto Fonte das Águas nasceu com o propósito de promover a dignidade humana e a justiça social 
                na comunidade do bairro Industrial, em Aracaju. Trabalhamos diariamente para criar um espaço seguro 
                e acolhedor onde crianças, adolescentes e suas famílias possam encontrar apoio, educação e esperança.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Através de nossos projetos e ações, buscamos capacitar pessoas, fortalecer vínculos familiares e 
                construir uma comunidade mais justa e solidária.
              </p>
              <Link href="/sobre">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Conheça Nossa História
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
                  Promover um espaço seguro e acolhedor para crianças, adolescentes e suas famílias, 
                  oferecendo oportunidades de desenvolvimento integral e fortalecimento de vínculos comunitários.
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
                  Ser referência na capacitação de pessoas e no desenvolvimento comunitário, 
                  inspirando transformação social através do amor, educação e justiça.
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
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="font-medium">Amor</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="font-medium">Justiça</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="font-medium">Integridade</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden">
              <div className="h-48 gradient-primary flex items-center justify-center">
                <GraduationCap className="h-20 w-20 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold mb-3 text-primary">Vida em Movimento</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Projeto de capacitação e desenvolvimento integral, promovendo atividades esportivas, 
                  culturais e educacionais para crianças e adolescentes.
                </p>
                <Link href="/projetos#vida-em-movimento">
                  <Button variant="link" className="p-0 h-auto text-primary font-semibold">
                    Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden">
              <div className="h-48 gradient-secondary flex items-center justify-center">
                <HandHeart className="h-20 w-20 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold mb-3 text-secondary">Mesa da Vida</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Projeto de segurança alimentar que leva refeições e dignidade para famílias em situação 
                  de vulnerabilidade social.
                </p>
                <Link href="/projetos#mesa-da-vida">
                  <Button variant="link" className="p-0 h-auto text-secondary font-semibold">
                    Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden">
              <div className="h-48 bg-accent flex items-center justify-center">
                <HomeIcon className="h-20 w-20 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold mb-3 text-accent">Projeto Boa Obra</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Reforma e melhoria de moradias de famílias em situação de vulnerabilidade, 
                  promovendo dignidade e qualidade de vida.
                </p>
                <Link href="/projetos#boa-obra">
                  <Button variant="link" className="p-0 h-auto text-accent font-semibold">
                    Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

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
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Faça Parte Dessa Transformação
              </h2>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Sua contribuição pode mudar vidas. Seja através de doações, trabalho voluntário ou 
                compartilhando nossa missão, você pode fazer a diferença na vida de dezenas de famílias.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/doar">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                    Doar Agora
                    <Heart className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/voluntarios">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                    Quero Ser Voluntário
                    <Users className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="/impact.jpg" 
                alt="Impacto Social" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
