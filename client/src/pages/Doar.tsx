import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, Copy, Check, QrCode, CreditCard, Users, 
  Smartphone, Building2, HandHeart, ArrowRight 
} from "lucide-react";
import { toast } from "sonner";

export default function Doar() {
  const [copied, setCopied] = useState(false);
  const pixKey = "52.250.050/0001-20";

  const copyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    toast.success("Chave PIX copiada!");
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Faça sua Doação
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Sua contribuição transforma vidas e fortalece nossa missão de promover dignidade e justiça social
            </p>
          </div>
        </div>
      </section>

      {/* Por que doar */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Por que <span className="text-gradient">Doar?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada doação faz a diferença real na vida de dezenas de famílias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Impacto Direto</h3>
                <p className="text-muted-foreground">
                  100% das doações vão diretamente para os projetos e beneficiários
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Transparência Total</h3>
                <p className="text-muted-foreground">
                  Prestamos contas de cada centavo recebido e aplicado
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <HandHeart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Transformação Real</h3>
                <p className="text-muted-foreground">
                  Veja o resultado do seu apoio através dos nossos relatórios
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formas de Doar */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Formas de <span className="text-gradient">Contribuir</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha a forma que melhor se adequa a você
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* PIX - Destaque */}
            <Card className="border-2 border-primary shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold">PIX - Forma Mais Rápida</h3>
                    <p className="text-sm text-muted-foreground">Doação instantânea e sem taxas</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-muted-foreground mb-6">
                      Faça sua doação de forma rápida e segura usando nossa chave PIX. 
                      Qualquer valor faz a diferença!
                    </p>

                    <div className="bg-muted/50 rounded-lg p-6 mb-6">
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Chave PIX (CNPJ):</p>
                      <div className="flex items-center gap-3">
                        <code className="flex-1 text-xl font-bold text-primary bg-background px-4 py-3 rounded-lg">
                          {pixKey}
                        </code>
                        <Button
                          onClick={copyPix}
                          size="lg"
                          variant="outline"
                          className="flex-shrink-0"
                        >
                          {copied ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5" />}
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        <strong>Favorecido:</strong> Instituto Fonte das Águas - IFA
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Transferência instantânea</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Sem taxas bancárias</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Disponível 24 horas por dia</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="w-64 h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <QrCode className="h-24 w-24 mx-auto mb-4 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            QR Code PIX<br />
                            <span className="text-xs">(Escaneie com seu app de banco)</span>
                          </p>
                        </div>
                      </div>
                      <p className="text-center text-xs text-muted-foreground mt-4">
                        Ou copie a chave PIX ao lado
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transferência Bancária */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10">
                    <Building2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">Transferência Bancária</h3>
                    <p className="text-sm text-muted-foreground">Para doações via TED ou DOC</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Banco:</p>
                      <p className="text-base font-medium">A definir</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Agência:</p>
                      <p className="text-base font-medium">A definir</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Conta Corrente:</p>
                      <p className="text-base font-medium">A definir</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">CNPJ:</p>
                      <p className="text-base font-medium">52.250.050/0001-20</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Favorecido:</p>
                      <p className="text-base font-medium">Instituto Fonte das Águas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cartão de Crédito */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                    <CreditCard className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">Cartão de Crédito</h3>
                    <p className="text-sm text-muted-foreground">Doação única ou recorrente</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Em breve, você poderá fazer doações recorrentes mensais com cartão de crédito. 
                  Enquanto isso, utilize PIX ou transferência bancária.
                </p>

                <Button disabled className="w-full md:w-auto">
                  Em breve disponível
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outras Formas de Contribuir */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Outras Formas de <span className="text-gradient">Ajudar</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Além de doações financeiras, você pode contribuir de outras maneiras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Seja Voluntário</h3>
                <p className="text-muted-foreground mb-6">
                  Doe seu tempo, talento e conhecimento. Temos diversas áreas onde você pode atuar 
                  e fazer a diferença diretamente na vida das pessoas.
                </p>
                <a href="/voluntarios">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Quero Ser Voluntário
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-secondary mb-6">
                  <HandHeart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Doação de Materiais</h3>
                <p className="text-muted-foreground mb-6">
                  Doe equipamentos esportivos, materiais escolares, alimentos não perecíveis, 
                  roupas e outros itens que possam beneficiar nossos projetos.
                </p>
                <a 
                  href="https://wa.me/5579996402118?text=Olá! Gostaria de fazer uma doação de materiais para o Instituto Fonte das Águas."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Entrar em Contato
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="font-display text-3xl font-bold mb-4">
                  Compromisso com a <span className="text-gradient">Transparência</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Acreditamos que a transparência é fundamental para manter a confiança dos nossos 
                  doadores e parceiros. Por isso, disponibilizamos relatórios detalhados de todas 
                  as nossas atividades e uso dos recursos.
                </p>
                <a href="/transparencia">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                    Ver Prestação de Contas
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dúvidas */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">
              Tem Dúvidas?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato conosco pelo WhatsApp ou e-mail. Estamos à disposição para 
              esclarecer qualquer dúvida sobre doações e como você pode ajudar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5579996402118?text=Olá! Tenho dúvidas sobre como fazer uma doação."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
              <a
                href="mailto:contato@institutofontedasaguas.org"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                E-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
