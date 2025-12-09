import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, Download, Eye, CheckCircle2, 
  TrendingUp, Users, DollarSign, Calendar 
} from "lucide-react";

export default function Transparencia() {
  // Dados de exemplo - podem ser atualizados com dados reais
  const relatorios = [
    {
      ano: 2024,
      trimestre: "4º Trimestre",
      tipo: "Relatório de Atividades",
      data: "Janeiro 2025",
      status: "Disponível",
    },
    {
      ano: 2024,
      trimestre: "3º Trimestre",
      tipo: "Demonstrativo Financeiro",
      data: "Outubro 2024",
      status: "Disponível",
    },
    {
      ano: 2024,
      trimestre: "2º Trimestre",
      tipo: "Relatório de Atividades",
      data: "Julho 2024",
      status: "Disponível",
    },
    {
      ano: 2024,
      trimestre: "1º Trimestre",
      tipo: "Demonstrativo Financeiro",
      data: "Abril 2024",
      status: "Disponível",
    },
  ];

  const indicadores2024 = {
    totalDoacoes: "R$ 150.000,00",
    familiasAtendidas: 53,
    voluntariosAtivos: 56,
    projetosAtivos: 5,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transparência
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Prestação de contas e relatórios de nossas atividades
            </p>
          </div>
        </div>
      </section>

      {/* Compromisso com Transparência */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Nosso Compromisso com a <span className="text-gradient">Transparência</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acreditamos que a transparência é fundamental para manter a confiança dos nossos 
              doadores, parceiros e da comunidade. Por isso, disponibilizamos relatórios detalhados 
              de todas as nossas atividades, demonstrativos financeiros e prestação de contas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Prestação de Contas</h3>
                <p className="text-muted-foreground">
                  Relatórios trimestrais detalhados de receitas e despesas
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <FileText className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Relatórios de Atividades</h3>
                <p className="text-muted-foreground">
                  Documentação completa de todas as ações e projetos realizados
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Auditoria Externa</h3>
                <p className="text-muted-foreground">
                  Nossas contas são auditadas por conselho fiscal independente
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Indicadores 2024 */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Indicadores <span className="text-gradient">2024</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Principais números do nosso impacto social
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-primary mb-2">
                    {indicadores2024.totalDoacoes}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">Total de Doações</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-secondary mb-2">
                    {indicadores2024.familiasAtendidas}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">Famílias Atendidas</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-accent mb-2">
                    {indicadores2024.voluntariosAtivos}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">Voluntários Ativos</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-primary mb-2">
                    {indicadores2024.projetosAtivos}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">Projetos Ativos</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Relatórios e Documentos */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Relatórios e <span className="text-gradient">Documentos</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Acesse nossos relatórios financeiros e de atividades
              </p>
            </div>

            <div className="space-y-4">
              {relatorios.map((relatorio, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-lg mb-1">
                            {relatorio.tipo} - {relatorio.trimestre} {relatorio.ano}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {relatorio.data}
                            </span>
                            <span className="flex items-center gap-1">
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                              {relatorio.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>
                          <Eye className="h-4 w-4 mr-2" />
                          Visualizar
                        </Button>
                        <Button variant="outline" size="sm" disabled>
                          <Download className="h-4 w-4 mr-2" />
                          Baixar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Os relatórios estão sendo preparados e estarão disponíveis em breve. 
                Para informações adicionais, entre em contato conosco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentos Institucionais */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Documentos <span className="text-gradient">Institucionais</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Acesse nossos documentos oficiais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg">Estatuto Social</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Documento que estabelece as normas de funcionamento do instituto
                  </p>
                  <Button variant="outline" size="sm" disabled className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar Estatuto
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-display font-bold text-lg">CNPJ e Documentos</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    CNPJ: 52.250.050/0001-20 e outros documentos oficiais
                  </p>
                  <Button variant="outline" size="sm" disabled className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar Documentos
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-display font-bold text-lg">Código de Ética</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Princípios éticos que guiam nossas ações e relacionamentos
                  </p>
                  <Button variant="outline" size="sm" disabled className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar Código
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg">Relatório Anual 2023</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Balanço completo das atividades e resultados do ano anterior
                  </p>
                  <Button variant="outline" size="sm" disabled className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar Relatório
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="section-padding">
        <div className="container">
          <Card className="border-none shadow-xl gradient-primary text-white max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl font-bold mb-4">
                Dúvidas sobre Transparência?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Estamos à disposição para esclarecer qualquer dúvida sobre nossas contas, 
                relatórios e prestação de contas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:transparencia@institutofontedasaguas.org"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Entre em Contato
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
