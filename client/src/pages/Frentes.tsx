import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";

export default function Frentes() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nossas 4 Frentes de Atuação
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Conhecer os pilares que sustentam nosso trabalho de transformação social
            </p>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              O Instituto Fonte das Águas organiza seu trabalho em 4 frentes de atuação estratégicas, 
              cada uma focada em diferentes dimensões do desenvolvimento humano e transformação social. 
              Em cada frente, desenvolvemos projetos específicos que trabalham em sinergia para 
              promover o bem-estar integral das crianças, adolescentes e famílias do Bairro Industrial.
            </p>
          </div>
        </div>
      </section>

      {/* Frente 1: Vínculos para o Bem-Estar */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full gradient-primary flex-shrink-0 flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="font-display text-4xl font-bold text-primary mb-2">
                  Frente 1: Vínculos para o Bem-Estar
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fortalecimento de relações humanas e cuidado integral
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Esta frente é dedicada ao fortalecimento dos vínculos familiares e comunitários, 
              oferecendo suporte integral que passa por diferentes aspectos do bem-estar: nutricional, 
              psicológico, jurídico e emocional. Acreditamos que pessoas com vínculos fortes e apoio 
              adequado conseguem superar desafios com mais resiliência.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-4 text-primary">Mamãe na Fonte</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Programa de acompanhamento e apoio a mães e gestantes, oferecendo orientação, 
                    acompanhamento psicológico e suporte em diferentes fases da maternidade.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Benefícios:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Orientação gestacional
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Apoio psicológico
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Networking entre mães
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-4 text-primary">CELEBRE</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Espaço de celebração e confraternização onde reunimos a comunidade para 
                    momentos de alegria, troca de experiências e fortalecimento de laços.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Atividades:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Celebrações comunitárias
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Confraternizações de famílias
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Momentos compartilhados
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-4 text-primary">Atendimento Nutricional</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Acompanhamento especializado em nutrição para crianças, adolescentes e famílias, 
                    promovendo hábitos saudáveis de alimentação.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Serviços:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Avaliação nutricional
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Orientação alimentar
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Educação em saúde
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-4 text-primary">Atendimento Psicológico</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Suporte psicológico e emocional para crianças, adolescentes e famílias, 
                    ajudando a processar emoções e superar traumas.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Oferecemos:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Acompanhamento psicológico
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Grupos de apoio
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Orientações emocionais
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-4 text-primary">Consultoria Jurídica</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Orientação e assessoria jurídica para famílias, auxiliando em questões legais 
                    e proteção de direitos.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Suporte em:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Orientações jurídicas
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Proteção de direitos
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Assessoria familiar
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Frente 2: Nutrição e Dignidade */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full gradient-secondary flex-shrink-0 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="font-display text-4xl font-bold text-secondary mb-2">
                  Frente 2: Nutrição e Dignidade
                </h2>
                <p className="text-lg text-muted-foreground">
                  Segurança alimentar e promoção da dignidade humana
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              A segurança alimentar é um direito fundamental. Esta frente trabalha para garantir 
              que crianças, adolescentes e famílias tenham acesso a refeições nutritivas e tenham 
              também a oportunidade de celebrar momentos de partilha comunitária.
            </p>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-display text-3xl font-bold mb-6 text-secondary">
                  Mesa da Vida - Segurança Alimentar e Partilha Comunitária
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  O projeto Mesa da Vida é o coração dessa frente. Vai além de apenas alimentar: 
                  é sobre criar espaços de dignidade, respeito e comunidade. Oferecemos refeições 
                  nutritivas e balanceadas enquanto promovemos a integração comunitária e o 
                  fortalecimento de laços entre famílias.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-lg bg-secondary/10 border border-secondary/20">
                    <h4 className="font-semibold text-secondary mb-3">Refeições Diárias</h4>
                    <p className="text-sm text-muted-foreground">
                      Oferecemos café da manhã, almoço e lanche para crianças e adolescentes, 
                      com acompanhamento nutricional especializado.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-secondary/10 border border-secondary/20">
                    <h4 className="font-semibold text-secondary mb-3">Partilha Comunitária</h4>
                    <p className="text-sm text-muted-foreground">
                      Momentos de refeição compartilhada que promovem convivência, alegria 
                      e fortalecimento dos laços comunitários.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-secondary/10 border border-secondary/20">
                    <h4 className="font-semibold text-secondary mb-3">Educação Alimentar</h4>
                    <p className="text-sm text-muted-foreground">
                      Orientações sobre nutrição, hábitos saudáveis e sustentabilidade 
                      em relação à alimentação.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Frente 3: Inclusão pelo Esporte */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-accent flex-shrink-0 flex items-center justify-center">
                <Target className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="font-display text-4xl font-bold text-accent mb-2">
                  Frente 3: Inclusão pelo Esporte
                </h2>
                <p className="text-lg text-muted-foreground">
                  O esporte como ferramenta de transformação social
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              O esporte é um poderoso agente de transformação. Esta frente utiliza diferentes 
              modalidades esportivas para promover inclusão, desenvolvimento de habilidades, 
              disciplina, confiança e oportunidades para crianças e adolescentes.
            </p>

            <div className="space-y-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-4 text-accent">Bola pra Frente</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Projeto de futebol que promove inclusão, trabalho em equipe e desenvolvimento 
                    de habilidades técnicas e pessoais através da modalidade mais popular.
                  </p>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Faixa etária:</strong> Crianças e adolescentes
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-4 text-accent">Tatame da Vida</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Aulas de Jiu-Jitsu que desenvolvem disciplina, respeito, autoconfiança e 
                    técnica em um ambiente inclusivo e acolhedor.
                  </p>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Destaque:</strong> Realizamos formatura de fomandos do projeto
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-4 text-accent">Vida em Movimento</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Programa multidisciplinar que oferece várias modalidades esportivas em um 
                    mesmo espaço, permitindo que crianças e adolescentes explorem diferentes 
                    formas de movimento e expressão.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                    {["Jiu-Jitsu", "Ballet", "Futebol", "Capoeira"].map((modalidade) => (
                      <div key={modalidade} className="bg-accent/10 p-3 rounded-lg text-center">
                        <p className="text-sm font-semibold text-accent">{modalidade}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Frente 4: Proteja a Infância */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full gradient-primary flex-shrink-0 flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="font-display text-4xl font-bold text-primary mb-2">
                  Frente 4: Proteja a Infância
                </h2>
                <p className="text-lg text-muted-foreground">
                  Proteção e conscientização sobre direitos infantis
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Proteger a infância é um compromisso inalienável. Esta frente trabalha na prevenção 
              e no acompanhamento de vulnerabilidades, promovendo consciência sobre direitos das 
              crianças e adolescentes, além de apoiar vítimas de violência e abuso.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-4 text-primary">
                    Juntos pela Infância Segura
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Programa de proteção e atendimento para crianças e adolescentes em situações 
                    de vulnerabilidade, com foco em prevenção, acolhimento e acompanhamento.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Ações:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Identificação de vulnerabilidades
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Acompanhamento integral
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Encaminhamentos quando necessário
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-4 text-primary">
                    Campanhas de Conscientização
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Campanhas comunitárias que promovem consciência sobre direitos infantis, 
                    prevenção de abuso e importância da proteção integral.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Foco de Atuação:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Direitos da criança e adolescente
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Prevenção de violência
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        Educação para participação social
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container">
          <Card className="border-none shadow-xl gradient-primary text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Faça Parte dessa Transformação
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Você pode contribuir com qualquer uma de nossas frentes de atuação, 
                seja como voluntário, parceiro ou apoiador.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/voluntarios">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                    Seja Voluntário
                    <Users className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold">
                    Entre em Contato
                    <ArrowRight className="ml-2 h-5 w-5" />
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
