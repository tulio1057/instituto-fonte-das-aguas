import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, Users, BookOpen, Award, 
  Calendar, Clock, MapPin, ArrowRight 
} from "lucide-react";

export default function Capacitacoes() {
  const capacitacoes = [
    {
      titulo: "Capacitação de Voluntários",
      descricao: "Formação completa para novos voluntários do instituto, abordando nossa missão, valores, metodologias e práticas de atuação.",
      duracao: "8 horas",
      formato: "Presencial",
      proxima: "A definir",
      vagas: "Abertas",
    },
    {
      titulo: "Educação Socioemocional",
      descricao: "Curso para educadores e voluntários sobre desenvolvimento socioemocional de crianças e adolescentes.",
      duracao: "12 horas",
      formato: "Híbrido",
      proxima: "A definir",
      vagas: "Em breve",
    },
    {
      titulo: "Gestão de Projetos Sociais",
      descricao: "Capacitação em planejamento, execução e avaliação de projetos sociais, voltada para lideranças comunitárias.",
      duracao: "16 horas",
      formato: "Presencial",
      proxima: "A definir",
      vagas: "Em breve",
    },
    {
      titulo: "Primeiros Socorros",
      descricao: "Treinamento básico de primeiros socorros para voluntários que atuam diretamente com crianças e adolescentes.",
      duracao: "6 horas",
      formato: "Presencial",
      proxima: "A definir",
      vagas: "Em breve",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Capacitações
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Formação e desenvolvimento para voluntários e comunidade
            </p>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Investindo em <span className="text-gradient">Pessoas</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acreditamos que a capacitação é fundamental para o desenvolvimento de pessoas e 
              comunidades. Por isso, oferecemos diversos cursos e treinamentos para nossos 
              voluntários, parceiros e membros da comunidade, sempre com foco na excelência 
              e no impacto social.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Formação de Qualidade</h3>
                <p className="text-muted-foreground">
                  Cursos desenvolvidos por profissionais experientes e alinhados às melhores práticas
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Aprendizado Prático</h3>
                <p className="text-muted-foreground">
                  Metodologia que combina teoria e prática, com vivências reais
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Certificação</h3>
                <p className="text-muted-foreground">
                  Certificado de participação para todos os cursos concluídos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capacitações Disponíveis */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Nossas <span className="text-gradient">Capacitações</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Conheça os cursos e treinamentos que oferecemos
              </p>
            </div>

            <div className="space-y-6">
              {capacitacoes.map((capacitacao, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <h3 className="font-display text-2xl font-bold mb-3">
                          {capacitacao.titulo}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {capacitacao.descricao}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">
                              <strong className="text-foreground">Duração:</strong> {capacitacao.duracao}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <BookOpen className="h-4 w-4 text-secondary" />
                            <span className="text-muted-foreground">
                              <strong className="text-foreground">Formato:</strong> {capacitacao.formato}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between">
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-accent" />
                            <span className="text-muted-foreground">
                              <strong className="text-foreground">Próxima turma:</strong> {capacitacao.proxima}
                            </span>
                          </div>
                          <div>
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                              capacitacao.vagas === "Abertas" 
                                ? "bg-green-100 text-green-700" 
                                : "bg-yellow-100 text-yellow-700"
                            }`}>
                              {capacitacao.vagas}
                            </span>
                          </div>
                        </div>
                        <Button 
                          variant={capacitacao.vagas === "Abertas" ? "default" : "outline"}
                          disabled={capacitacao.vagas !== "Abertas"}
                          className="w-full"
                        >
                          {capacitacao.vagas === "Abertas" ? "Inscrever-se" : "Em breve"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Público-Alvo */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Para Quem São as <span className="text-gradient">Capacitações?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold">Voluntários</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Nossos voluntários recebem formação contínua para atuar com excelência nos 
                    projetos do instituto. A capacitação é obrigatória para todos os novos 
                    voluntários e oferecida regularmente para atualização.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold">Educadores</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Professores, pedagogos e educadores sociais da comunidade podem participar 
                    de nossas capacitações para aprimorar suas práticas e conhecer novas 
                    metodologias de ensino e desenvolvimento socioemocional.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold">Lideranças Comunitárias</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Pessoas que atuam em organizações sociais, associações de bairro e outras 
                    iniciativas comunitárias podem se beneficiar de nossas capacitações em 
                    gestão de projetos sociais.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold">Comunidade em Geral</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Alguns cursos são abertos para toda a comunidade, como primeiros socorros 
                    e outros temas de interesse geral. Fique atento às nossas redes sociais 
                    para saber quando haverá novas turmas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <Card className="border-none shadow-xl gradient-primary text-white max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Quer Participar das Capacitações?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Entre em contato conosco para saber mais sobre as próximas turmas e como se inscrever
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5579996402118?text=Olá! Gostaria de saber mais sobre as capacitações do Instituto Fonte das Águas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Entrar em Contato
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold mb-6 text-center">
                  Informações Importantes
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Local:</p>
                      <p className="text-sm">
                        As capacitações presenciais acontecem na sede do instituto: 
                        Rua Adezinho da Costa Pinto, 149 - Bairro Industrial, Aracaju - SE
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Certificado:</p>
                      <p className="text-sm">
                        Todos os participantes que concluírem as capacitações com frequência mínima 
                        de 75% receberão certificado de participação.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Vagas Limitadas:</p>
                      <p className="text-sm">
                        As turmas têm número limitado de vagas para garantir a qualidade do 
                        aprendizado. Inscreva-se com antecedência!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Material Didático:</p>
                      <p className="text-sm">
                        Todo o material didático é fornecido gratuitamente pelo instituto.
                      </p>
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
