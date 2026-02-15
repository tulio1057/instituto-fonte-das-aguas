import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Smartphone, Gift, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ComoAjudar() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Como Ajudar
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Existem várias maneiras de contribuir com a transformação do Bairro Industrial
            </p>
          </div>
        </div>
      </section>

      {/* Duas Colunas de Ação */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Seja Voluntário */}
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="h-48 gradient-primary flex items-center justify-center">
                <Users className="h-24 w-24 text-white opacity-50" />
              </div>
              <CardContent className="p-8">
                <h2 className="font-display text-3xl font-bold mb-4 text-primary">
                  Seja Voluntário
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Doe seu tempo, talento e conhecimento. Temos diversas áreas onde você pode atuar 
                  e fazer a diferença diretamente na vida das pessoas.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Áreas educativas e comunitárias</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Áreas administrativas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Comunicação e tecnologia</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Estágios em várias áreas</span>
                  </div>
                </div>

                <Link href="/voluntarios">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Faça uma Doação */}
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="h-48 gradient-secondary flex items-center justify-center">
                <Heart className="h-24 w-24 text-white opacity-50" />
              </div>
              <CardContent className="p-8">
                <h2 className="font-display text-3xl font-bold mb-4 text-secondary">
                  Faça uma Doação
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Sua contribuição financeira permite que mantenhamos e expandamos nossos projetos 
                  de transformação social.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">PIX instantâneo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Transferência bancária</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Doação de materiais</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">100% transparência</span>
                  </div>
                </div>

                <Link href="/doar">
                  <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formas de Contribuição Rápidas */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Outras Formas de <span className="text-gradient">Contribuir</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada contribuição, por menor que seja, faz a diferença
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">PIX Rápido</h3>
                <p className="text-muted-foreground mb-6">
                  Doe agora mesmo via PIX. Sem burocracias, sem taxas.
                </p>
                <p className="font-mono text-sm bg-muted p-3 rounded-lg mb-4">
                  52250050000120
                </p>
                <Button variant="outline" className="w-full">
                  Copiar Chave PIX
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <Gift className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Doação de Materiais</h3>
                <p className="text-muted-foreground mb-6">
                  Alimentos, equipamentos esportivos, roupas, materiais escolares.
                </p>
                <a
                  href="https://wa.me/5579996402118?text=Olá! Gostaria de fazer uma doação de materiais."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Entrar em Contato
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Compartilhe Nossa Missão</h3>
                <p className="text-muted-foreground mb-6">
                  Divulgue nossos projetos em suas redes sociais e converse com amigos.
                </p>
                <a
                  href="https://instagram.com/instituto.fontedasaguas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full">
                    Seguir no Instagram
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por Que Ajudar */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Por Que Ajudar o <span className="text-gradient">Instituto?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-display text-xl font-bold mb-4 text-primary">
                    Transparência Total
                  </h3>
                  <p className="text-muted-foreground">
                    Sabemos exatamente para onde cada centavo vai. Prestamos contas de forma clara 
                    e acessível. Você sabe que seu dinheiro está sendo bem utilizado.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-display text-xl font-bold mb-4 text-secondary">
                    Impacto Real
                  </h3>
                  <p className="text-muted-foreground">
                    Suas contribuições transformam vidas. Já impactamos 300+ pessoas com nossos 
                    projetos. Cada nova doação expande nosso alcance no Bairro Industrial.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-display text-xl font-bold mb-4 text-accent">
                    Organização Séria
                  </h3>
                  <p className="text-muted-foreground">
                    O Instituto Fonte das Águas é uma ONG estruturada, com diretoria, 40 voluntários 
                    e governança clara. Estamos comprometidos com a excelência.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-display text-xl font-bold mb-4 text-primary">
                    Comunidade Forte
                  </h3>
                  <p className="text-muted-foreground">
                    Você faz parte de uma comunidade que acredita no poder da transformação social. 
                    Juntos, construímos esperança no Bairro Industrial.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Números de Impacto */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Nossa <span className="text-gradient">Transformação</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="font-display text-4xl font-bold text-primary mb-2">300+</div>
                <p className="text-sm text-muted-foreground">Vidas Impactadas</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="font-display text-4xl font-bold text-secondary mb-2">11</div>
                <p className="text-sm text-muted-foreground">Projetos Ativos</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="font-display text-4xl font-bold text-accent mb-2">~50</div>
                <p className="text-sm text-muted-foreground">Famílias Assistidas</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="font-display text-4xl font-bold text-primary mb-2">~40</div>
                <p className="text-sm text-muted-foreground">Voluntários</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="section-padding gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Escolha Sua Forma de Contribuir
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Não importa qual seja sua escolha, você estará fazendo parte de uma transformação real 
              no Bairro Industrial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/voluntarios">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Ser Voluntário
                  <Users className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/doar">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                  Fazer Doação
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
