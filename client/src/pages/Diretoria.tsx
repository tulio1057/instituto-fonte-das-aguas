import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, User } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import type { SiteContent, MembroDiretoria } from "@/services/contentTypes";

export default function Diretoria() {
  const { content } = useContent();
  // Usa diretoria do content (com campos extendidos) ou fallback vazio
  const diretoria: MembroDiretoria[] = (content as SiteContent).diretoria ?? [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Nossa Diretoria</h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Conheça as pessoas que lideram e guiam o Instituto Fonte das Águas
            </p>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa diretoria é composta por pessoas dedicadas e comprometidas com a missão de promover
              a dignidade humana e a justiça social. Cada membro traz sua experiência e paixão para
              garantir que o instituto cumpra seus objetivos e impacte positivamente a vida de
              dezenas de famílias em nossa comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diretoria.map((membro, index) => (
              <Card key={membro.id ?? index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="mb-6">
                    {membro.imagemBase64 ? (
                      <img
                        src={membro.imagemBase64}
                        alt={membro.nome}
                        className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-primary/20"
                      />
                    ) : (
                      <div className="w-24 h-24 mx-auto rounded-full gradient-primary flex items-center justify-center">
                        <User className="h-12 w-12 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-display text-xl font-bold mb-2">{membro.nome}</h3>
                    <p className="text-sm font-semibold text-primary mb-3">{membro.cargo}</p>
                    {membro.descricao && (
                      <p className="text-sm text-muted-foreground leading-relaxed">{membro.descricao}</p>
                    )}
                  </div>
                  <div className="flex justify-center gap-3 pt-4 border-t">
                    {membro.email ? (
                      <a
                        href={`mailto:${membro.email}`}
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="p-2 rounded-full bg-primary/10 text-muted-foreground cursor-default">
                        <Mail className="h-4 w-4" />
                      </span>
                    )}
                    {membro.linkedin ? (
                      <a
                        href={membro.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="p-2 rounded-full bg-primary/10 text-muted-foreground cursor-default">
                        <Linkedin className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governança e Transparência */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Governança e <span className="text-gradient">Transparência</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { color: "text-primary", title: "Gestão Democrática", text: "O Instituto Fonte das Águas adota práticas de gestão democrática e participativa, com reuniões regulares da diretoria e assembleias com a comunidade. Todas as decisões importantes são tomadas de forma coletiva e transparente." },
                { color: "text-secondary", title: "Prestação de Contas", text: "Mantemos total transparência em nossa gestão financeira e administrativa. Nossos relatórios e demonstrativos estão disponíveis na seção de Transparência do site, garantindo que doadores e parceiros possam acompanhar o uso dos recursos." },
                { color: "text-accent", title: "Conselho Fiscal", text: "Nosso Conselho Fiscal é composto por membros independentes que fiscalizam as contas e a gestão do instituto, garantindo a correta aplicação dos recursos e o cumprimento das normas legais e estatutárias." },
                { color: "text-primary", title: "Código de Ética", text: "Todos os membros da diretoria, voluntários e colaboradores seguem nosso Código de Ética, que estabelece princípios de integridade, respeito, confidencialidade e compromisso com a missão institucional." },
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className={`font-display text-xl font-bold mb-4 ${item.color}`}>{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container">
          <Card className="border-none shadow-xl gradient-primary text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Quer Fazer Parte da Nossa Equipe?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Estamos sempre em busca de pessoas comprometidas com nossa missão. Se você tem interesse
                em contribuir como voluntário ou parceiro, entre em contato conosco.
              </p>
              <a
                href="mailto:contato@institutofontedasaguas.org"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" /> Entre em Contato
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
