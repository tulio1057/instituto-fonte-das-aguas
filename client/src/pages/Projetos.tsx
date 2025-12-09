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

      {/* Vida em Movimento - Destaque */}
      <section className="section-padding" id="vida-em-movimento">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
                <GraduationCap className="h-5 w-5" />
                Projeto em Destaque
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Vida em <span className="text-gradient">Movimento</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nosso principal projeto de capacitação e desenvolvimento integral
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img 
                  src="/vida-em-movimento.jpg" 
                  alt="Projeto Vida em Movimento" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-6">O que é o Vida em Movimento?</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  O Vida em Movimento é o nosso projeto mais abrangente, focado no desenvolvimento 
                  integral de crianças e adolescentes através de atividades esportivas, culturais e 
                  educacionais. Oferecemos aulas de Jiu-Jitsu, reforço escolar, oficinas de arte e 
                  muito mais.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Em 2024, realizamos a primeira colação de grau do projeto, celebrando a conquista 
                  de 24 formandos das turmas de Jiu-Jitsu. Este marco representa não apenas o 
                  aprendizado de uma arte marcial, mas o desenvolvimento de disciplina, respeito e 
                  autoconfiança.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Atividades Esportivas</p>
                      <p className="text-sm text-muted-foreground">Jiu-Jitsu, futebol, capoeira e outras modalidades</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Apoio Educacional</p>
                      <p className="text-sm text-muted-foreground">Reforço escolar e atividades pedagógicas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Arte e Cultura</p>
                      <p className="text-sm text-muted-foreground">Oficinas de música, dança e artes plásticas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Desenvolvimento Pessoal</p>
                      <p className="text-sm text-muted-foreground">Atividades de autoconhecimento e cidadania</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Como Contribuir - Vida em Movimento */}
            <Card className="border-none shadow-xl gradient-primary text-white">
              <CardContent className="p-8 md:p-12">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-center">
                  Como Contribuir com o Vida em Movimento
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                      <Heart className="h-8 w-8" />
                    </div>
                    <h4 className="font-bold mb-2">Doação Financeira</h4>
                    <p className="text-sm opacity-90">
                      Contribua mensalmente ou pontualmente para manter as atividades
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                      <Users className="h-8 w-8" />
                    </div>
                    <h4 className="font-bold mb-2">Seja Voluntário</h4>
                    <p className="text-sm opacity-90">
                      Ofereça seu tempo e talento como instrutor ou apoio nas atividades
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                      <Target className="h-8 w-8" />
                    </div>
                    <h4 className="font-bold mb-2">Doação de Materiais</h4>
                    <p className="text-sm opacity-90">
                      Doe equipamentos esportivos, materiais escolares e uniformes
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link href="/doar">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                      Fazer Doação
                      <ArrowRight className="ml-2 h-5 w-5" />
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
        </div>
      </section>

      {/* Mesa da Vida */}
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
                  src="/mesa-da-vida.jpg" 
                  alt="Projeto Mesa da Vida" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projeto Boa Obra 
      <section className="section-padding" id="boa-obra">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/boa-obra.jpg" 
                  alt="Projeto Boa Obra" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold mb-4">
                  <Home className="h-5 w-5" />
                  Moradia Digna
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Projeto <span className="text-gradient">Boa Obra</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  O Projeto Boa Obra é uma iniciativa de reforma e melhoria de moradias de famílias 
                  em situação de vulnerabilidade. Acreditamos que toda família merece viver em um 
                  lar digno, seguro e acolhedor.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Em parceria com empresas e voluntários, realizamos desde pequenos reparos até 
                  reformas completas. Já realizamos a primeira visita técnica à casa do Sr. Alexandre, 
                  nosso primeiro beneficiário, marcando o início dessa jornada de transformação.
                </p>

                <Card className="border-none shadow-lg bg-accent/5 mb-6">
                  <CardContent className="p-6">
                    <h4 className="font-display font-bold mb-4">Como Funciona:</h4>
                    <ol className="space-y-3">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center font-bold">1</span>
                        <span className="text-sm text-muted-foreground">Identificação de famílias em situação de vulnerabilidade</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center font-bold">2</span>
                        <span className="text-sm text-muted-foreground">Visita técnica para levantamento das necessidades</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center font-bold">3</span>
                        <span className="text-sm text-muted-foreground">Captação de recursos e materiais</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center font-bold">4</span>
                        <span className="text-sm text-muted-foreground">Execução da reforma com voluntários e profissionais</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <p className="text-sm text-muted-foreground mb-6">
                  <strong>Parceiro Principal:</strong> Agradecemos à ColorText Tintas pelo apoio e 
                  comprometimento com essa iniciativa transformadora.
                </p>

                <Link href="/doar">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    Apoiar o Projeto Boa Obra
                    <Home className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

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
