import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Award, Users, BookOpen, Home } from "lucide-react";

export default function Sobre() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sobre o Instituto Fonte das Águas
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Uma história de amor, dedicação e transformação social na comunidade de Aracaju
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Nossa <span className="text-gradient">História</span>
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                O Instituto Fonte das Águas nasceu do sonho de transformar vidas através do amor, educação e 
                justiça social. Localizado no bairro Industrial, em Aracaju, Sergipe, o instituto surgiu da 
                necessidade de oferecer um espaço seguro e acolhedor para crianças, adolescentes e suas famílias 
                em situação de vulnerabilidade social.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Desde o início, nossa missão sempre foi clara: promover a dignidade humana através de ações 
                concretas que impactam positivamente a vida das pessoas. Acreditamos que cada indivíduo tem 
                potencial para crescer, aprender e transformar sua realidade quando recebe o apoio adequado.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Ao longo dos anos, expandimos nossos projetos e ações, sempre mantendo o foco no desenvolvimento 
                integral das pessoas. Hoje, contamos com uma equipe dedicada de 56 voluntários que trabalham 
                incansavelmente para fazer a diferença na vida de 53 famílias e centenas de crianças e adolescentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Missão, Visão e <span className="text-gradient">Valores</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e inspiram cada ação
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-primary">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Promover um espaço seguro e acolhedor para crianças, adolescentes e suas famílias, 
                  oferecendo oportunidades de desenvolvimento integral, fortalecimento de vínculos 
                  comunitários e promoção da dignidade humana através de ações educativas, culturais 
                  e de assistência social.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-secondary mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-secondary">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência na capacitação de pessoas e no desenvolvimento comunitário em Sergipe, 
                  inspirando transformação social através do amor, educação e justiça, e contribuindo 
                  para a construção de uma sociedade mais justa, solidária e inclusiva.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-accent">Valores</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Amor</p>
                      <p className="text-sm text-muted-foreground">Base de todas as nossas ações e relacionamentos</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Justiça</p>
                      <p className="text-sm text-muted-foreground">Compromisso com a equidade e dignidade humana</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Dignidade</p>
                      <p className="text-sm text-muted-foreground">Reconhecimento do valor intrínseco de cada pessoa</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Respeito</p>
                      <p className="text-sm text-muted-foreground">Valorização das diferenças e autonomia de cada indivíduo</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Integridade</p>
                      <p className="text-sm text-muted-foreground">Transparência e ética em todas as nossas ações</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Marcos Históricos */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Marcos <span className="text-gradient">Históricos</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Conheça os momentos importantes que marcaram a história do Instituto
              </p>
            </div>

            <div className="space-y-8">
              {/* 2020 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold mb-4">
                    2020
                  </div>
                  <div className="hidden sm:block w-1 h-24 bg-primary/20"></div>
                </div>
                <Card className="flex-1 border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 text-primary">Fundação do IFA</h3>
                    <p className="text-muted-foreground">
                      Fundação do Instituto Fonte das Águas e lançamento do Projeto Tatame da Vida, 
                      marcando o início de nossa jornada de transformação social.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 2021 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center text-white font-bold mb-4">
                    2021
                  </div>
                  <div className="hidden sm:block w-1 h-24 bg-secondary/20"></div>
                </div>
                <Card className="flex-1 border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 text-secondary">Projeto Vida em Movimento</h3>
                    <p className="text-muted-foreground">
                      Abertura do Projeto Vida em Movimento, ampliando nossas atividades com aulas 
                      de Jiu-Jitsu, ballet, futebol e capoeira.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 2022 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mb-4">
                    2022
                  </div>
                  <div className="hidden sm:block w-1 h-24 bg-accent/20"></div>
                </div>
                <Card className="flex-1 border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 text-accent">Novos Projetos de Saúde e Educação</h3>
                    <p className="text-muted-foreground">
                      Abertura dos projetos "Visão da Vida" (exames de vista e óculos) e 
                      "Fonte Educa" (reforço escolar e línguas estrangeiras).
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 2023 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold mb-4">
                    2023
                  </div>
                  <div className="hidden sm:block w-1 h-24 bg-primary/20"></div>
                </div>
                <Card className="flex-1 border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 text-primary">Expansão de Projetos</h3>
                    <p className="text-muted-foreground">
                      Realização do 2º Simpósio Infância Segura e lançamento do Projeto Boa Obra 
                      para reforma de moradias.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 2024 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center text-white font-bold mb-4">
                    2024
                  </div>
                </div>
                <Card className="flex-1 border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 text-secondary">Marcos Importantes</h3>
                    <p className="text-muted-foreground">
                      Lançamento do Projeto Bola para Frente, abertura do CELEBRE, e realização 
                      da 1ª Formatura do Instituto, celebrando 24 formandos das turmas de Jiu-Jitsu.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Público-Alvo */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Nosso <span className="text-gradient">Público-Alvo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos com diferentes grupos da comunidade, sempre com foco na transformação social
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Crianças e Adolescentes</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nosso foco principal são crianças e adolescentes em situação de vulnerabilidade social, 
                  oferecendo atividades educativas, culturais, esportivas e de desenvolvimento pessoal.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Atividades educacionais e de reforço escolar
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Esportes e atividades físicas
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Arte, cultura e expressão criativa
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <Home className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Famílias do Bairro Industrial</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nosso foco principal são famílias do Bairro Industrial com renda per capita de até 
                  1,5 salário mínimo. Trabalhamos para garantir que crianças, adolescentes e suas 
                  famílias tenham acesso a oportunidades de desenvolvimento e melhoria de qualidade de vida.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    Crianças e adolescentes em vulnerabilidade social
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    Famílias com baixa renda
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    Comunidades do Bairro Industrial
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Área de Atuação */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Onde <span className="text-gradient">Atuamos</span>
              </h2>
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-4">Bairro Industrial</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Estamos localizados no coração do bairro Industrial, em Aracaju, Sergipe. 
                      Nossa sede é um espaço acolhedor onde realizamos a maioria de nossas atividades 
                      e projetos.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-start gap-2">
                        <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Endereço:</strong> Rua Adezinho da Costa Pinto, 149
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Bairro:</strong> Industrial
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Cidade:</strong> Aracaju - SE
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">CEP:</strong> 49065-010
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6 text-center">
                    <p className="text-muted-foreground mb-4">
                      Além da nossa sede, levamos nossos projetos para outros locais da comunidade, 
                      sempre buscando alcançar mais famílias e ampliar nosso impacto social.
                    </p>
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-primary">
                      <Home className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
