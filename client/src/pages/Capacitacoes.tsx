import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap, Users, BookOpen, Award,
  Calendar, Clock, MapPin, ArrowRight
} from "lucide-react";
import { useContent } from "@/hooks/useContent";
import type { SiteContent, Capacitacao } from "@/services/contentTypes";

const STATUS_LABEL: Record<string, string> = {
  aberta: "Inscrições abertas",
  encerrada: "Encerrada",
  em_breve: "Em breve",
};

const STATUS_CLASS: Record<string, string> = {
  aberta: "bg-green-100 text-green-700",
  encerrada: "bg-gray-100 text-gray-600",
  em_breve: "bg-blue-100 text-blue-700",
};

export default function Capacitacoes() {
  const { content } = useContent();
  const capacitacoes: Capacitacao[] = (content as SiteContent).capacitacoes ?? [];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Capacitações</h1>
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
            {[
              { icon: GraduationCap, color: "bg-primary/10", iconColor: "text-primary", title: "Formação de Qualidade", desc: "Cursos desenvolvidos por profissionais experientes e alinhados às melhores práticas" },
              { icon: Users, color: "bg-secondary/10", iconColor: "text-secondary", title: "Aprendizado Prático", desc: "Metodologia que combina teoria e prática, com vivências reais" },
              { icon: Award, color: "bg-accent/10", iconColor: "text-accent", title: "Certificação", desc: "Certificado de participação para todos os cursos concluídos" },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${item.color} mb-6`}>
                    <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Capacitações */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Nossas <span className="text-gradient">Capacitações</span>
              </h2>
              <p className="text-lg text-muted-foreground">Conheça os cursos e treinamentos que oferecemos</p>
            </div>

            {capacitacoes.length === 0 ? (
              <div className="flex items-center justify-center py-16">
                <div className="text-center max-w-2xl">
                  <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h3 className="font-display text-2xl font-bold mb-3">Nenhuma capacitação agendada no momento</h3>
                  <p className="text-muted-foreground mb-6">
                    Estamos preparando novas capacitações para você. Fique atento às nossas redes sociais
                    e entre em contato para saber quando as próximas turmas serão abertas!
                  </p>
                  <a
                    href="https://wa.me/5579996402118?text=Olá! Gostaria de saber quando haverá próximas capacitações."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Receber Notificação <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capacitacoes.map((cap) => (
                  <Card key={cap.id} className="border-none shadow-lg hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        {cap.status && (
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${STATUS_CLASS[cap.status] || STATUS_CLASS.em_breve}`}>
                            {STATUS_LABEL[cap.status] || cap.status}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-xl font-bold mb-3">{cap.titulo}</h3>
                      {cap.descricao && <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{cap.descricao}</p>}
                      <div className="space-y-2 text-sm text-muted-foreground">
                        {cap.data && (
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary shrink-0" />
                            <span>{cap.data}</span>
                          </div>
                        )}
                        {cap.cargaHoraria && (
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-secondary shrink-0" />
                            <span>{cap.cargaHoraria}</span>
                          </div>
                        )}
                        {cap.local && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-accent shrink-0" />
                            <span>{cap.local}</span>
                          </div>
                        )}
                        {cap.vagas && (
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary shrink-0" />
                            <span>{cap.vagas}</span>
                          </div>
                        )}
                      </div>
                      {cap.status === "aberta" && (
                        <a
                          href="https://wa.me/5579996402118?text=Olá! Gostaria de me inscrever em uma capacitação."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                        >
                          Inscrever-se <ArrowRight className="h-4 w-4" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
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
              {[
                { gradient: "gradient-primary", icon: Users, title: "Voluntários", text: "Nossos voluntários recebem formação contínua para atuar com excelência nos projetos do instituto. A capacitação é obrigatória para todos os novos voluntários e oferecida regularmente para atualização." },
                { gradient: "gradient-secondary", icon: GraduationCap, title: "Educadores", text: "Professores, pedagogos e educadores sociais da comunidade podem participar de nossas capacitações para aprimorar suas práticas e conhecer novas metodologias de ensino e desenvolvimento socioemocional." },
                { gradient: "bg-accent", icon: Users, title: "Lideranças Comunitárias", text: "Pessoas que atuam em organizações sociais, associações de bairro e outras iniciativas comunitárias podem se beneficiar de nossas capacitações em gestão de projetos sociais." },
                { gradient: "gradient-primary", icon: BookOpen, title: "Comunidade em Geral", text: "Alguns cursos são abertos para toda a comunidade, como primeiros socorros e outros temas de interesse geral. Fique atento às nossas redes sociais para saber quando haverá novas turmas." },
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full ${item.gradient} flex items-center justify-center`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-display text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <Card className="border-none shadow-xl gradient-primary text-white max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Quer Participar das Capacitações?</h2>
              <p className="text-xl mb-8 opacity-90">Entre em contato conosco para saber mais sobre as próximas turmas e como se inscrever</p>
              <a
                href="https://wa.me/5579996402118?text=Olá! Gostaria de saber mais sobre as capacitações do Instituto Fonte das Águas."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Entrar em Contato <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
