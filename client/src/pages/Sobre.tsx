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
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Instituto Fonte das Águas nasceu em meio à pandemia da Covid-19, em um tempo marcado pela dor, 
                pela incerteza e pela urgência do cuidado com o outro. Ele surge como fruto de um movimento da 
                Graça Igreja Batista, que há mais de 45 anos desenvolve ações sociais na comunidade do Bairro Industrial, 
                em Aracaju. Há cerca de 20 anos, a igreja é presidida pelo pastor Antônio Sampaio, que, diante dos 
                desafios intensificados pela pandemia, decidiu fundar oficialmente o Instituto, em 2022, para ampliar 
                e estruturar esse cuidado.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                O nome Fonte das Águas carrega um significado profundo e simbólico. No Bairro Industrial, mais 
                especificamente na Rua Manoel Preto, existem antigas fontes que, no passado, abasteciam a cidade de 
                Aracaju quando ainda não havia uma rede pública de água. Assim como aquelas fontes foram essenciais 
                para a vida da cidade, o Instituto nasce com o propósito de voltar a ser fonte de vida, esperança e 
                dignidade para pessoas que, ao longo dos anos, viram seu território ser marginalizado e marcado por 
                estigmas de violência e exclusão.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mas o Bairro Industrial é muito mais do que os rótulos que lhe foram impostos. É um lugar de histórias, 
                de famílias, de crianças cheias de sonhos e de pessoas com propósito. O Instituto Fonte das Águas existe 
                para dar visibilidade a essa realidade, para afirmar que ali há vida pulsando e potencial sendo construído 
                todos os dias.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estamos presentes para ser um espaço de acolhimento, proteção e segurança para crianças, adolescentes e 
                suas famílias, fortalecendo vínculos, promovendo oportunidades e trabalhando, de forma contínua, para 
                promover a dignidade humana e a justiça social.
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
