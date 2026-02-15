import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, HandHeart, Home, Heart, Users, 
  ArrowRight, CheckCircle2, Target, Zap, BookOpen, Eye, Shield
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
                  src="/vida-em-movimento.png" 
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

      {/* 4 Frentes de Atuação */}
      <section className="section-padding bg-gradient-to-b from-muted/20 to-transparent">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Nossas 4 Frentes de <span className="text-gradient">Atuação</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Conheça os pilares que sustentam nosso trabalho de transformação
              </p>
            </div>

            {/* Frente 1 */}
            <div className="mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-full gradient-primary flex-shrink-0 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-primary">
                        Frente 1: Vínculos para o Bem-Estar
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Projetos focados no fortalecimento de relações humanas e cuidado integral:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">Mamãe na Fonte</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">CELEBRE</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">Atendimento Nutricional</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">Atendimento Psicológico</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">Consultoria Jurídica</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Frente 2 */}
            <div className="mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-full gradient-secondary flex-shrink-0 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-secondary">
                        Frente 2: Nutrição e Dignidade
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Projetos dedicados à segurança alimentar e promoção da dignidade:
                      </p>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-sm font-medium">Mesa da Vida - Segurança Alimentar e Partilha Comunitária</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Frente 3 */}
            <div className="mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent flex-shrink-0 flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-accent">
                        Frente 3: Inclusão pelo Esporte
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Projetos que utilizam o esporte como ferramenta de transformação:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-sm font-medium">Bola pra Frente</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-sm font-medium">Tatame da Vida</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-sm font-medium">Vida em Movimento</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        <strong>Modalidades:</strong> Jiu-Jitsu, Ballet, Futebol e Capoeira
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Frente 4 */}
            <div className="mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-full gradient-primary flex-shrink-0 flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-primary">
                        Frente 4: Proteja a Infância
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Projetos focados na proteção e conscientização sobre direitos infantis:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">Juntos pela Infância Segura</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">Campanhas de Conscientização</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Educação e Saúde */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary">Educação</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <strong>Fonte Educa:</strong> Oferecemos reforço escolar, apoio pedagógico 
                    e ensino de línguas estrangeiras para ampliar oportunidades de desenvolvimento.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex-shrink-0 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-secondary">Saúde</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <strong>Visão da Vida:</strong> Realização de exames de vista e distribuição 
                    de óculos para garantir acesso à saúde visual.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Detalhados */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Conheça Nossos <span className="text-gradient">11 Projetos</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Cada projeto contribui para diferentes dimensões da transformação social
              </p>
            </div>

            {/* PROGRAMA 1: VÍNCULOS */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold mb-8">
                <Heart className="h-5 w-5" />
                PROGRAMA 1: VÍNCULOS PARA O BEM-ESTAR
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Projeto: Mamãe na Fonte */}
                <Card className="border-none shadow-lg hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold">Mamãe na Fonte</h3>
                      <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">ODS 3</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Suporte integral para gestantes, lactantes e mães. Orientações nutricionais, 
                      acompanhamento emocional e conexão com redes de assistência.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Saúde</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Maternidade</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Projeto: CELEBRE */}
                <Card className="border-none shadow-lg hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold">CELEBRE</h3>
                      <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">ODS 5</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Celebração de feminilidade, empoderamento e cuidado. Atividades de estética, 
                      saúde e valorização da mulher como protagonista.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Feminilidade</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Empoderamento</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Projeto: Atendimento Nutricional */}
                <Card className="border-none shadow-lg hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold">Atend. Nutricional</h3>
                      <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">ODS 3</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Avaliação nutricional, orientações alimentares e planos customizados 
                      para saúde e bem-estar da comunidade.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Nutrição</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Saúde</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Projeto: Atendimento Psicológico */}
                <Card className="border-none shadow-lg hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold">Atend. Psicológico</h3>
                      <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">ODS 3</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Acompanhamento psicológico para crianças, adolescentes e famílias. 
                      Espaço seguro para processamento emocional.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Saúde Mental</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Bem-estar</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Projeto: Consultoria Jurídica */}
                <Card className="border-none shadow-lg hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold">Consultoria Jurídica</h3>
                      <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">ODS 16</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Orientações jurídicas e apoio na documentação. Garantia de direitos 
                      e cidadania para famílias vulneráveis.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Direitos</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Cidadania</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* PROGRAMA 2: NUTRIÇÃO */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold mb-8">
                <Zap className="h-5 w-5" />
                PROGRAMA 2: NUTRIÇÃO E DIGNIDADE
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Projeto: Mesa da Vida */}
                <Card className="border-none shadow-lg hover:shadow-xl transition md:col-span-2 lg:col-span-1">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold">Mesa da Vida</h3>
                      <span className="bg-secondary/20 text-secondary text-xs font-bold px-2 py-1 rounded">ODS 2</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Segurança alimentar e partilha comunitária. Distribuição de refeições 
                      e cestas básicas para famílias em situação de vulnerabilidade.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Alimentação</span>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Segurança Alimentar</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* PROGRAMA 3: ESPORTE */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold mb-8">
                <Target className="h-5 w-5" />
                PROGRAMA 3: INCLUSÃO PELO ESPORTE
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Projeto: Bola pra Frente */}
                <Card className="border-none shadow-lg hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold">Bola pra Frente</h3>
                      <span className="bg-accent/20 text-accent text-xs font-bold px-2 py-1 rounded">ODS 3</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Futebol como ferramenta de inclusão, disciplina e desenvolvimento. 
                      Aulas para crianças e adolescentes do bairro.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Esporte</span>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Futebol</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Projeto: Tatame da Vida */}
                <Card className="border-none shadow-lg hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold">Tatame da Vida</h3>
                      <span className="bg-accent/20 text-accent text-xs font-bold px-2 py-1 rounded">ODS 3</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Jiu-Jitsu para desenvolvimento de disciplina, respeito e autoconfiança. 
                      24 alunos formados em 2024.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Esporte</span>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Jiu-Jitsu</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Projeto: Vida em Movimento */}
                <Card className="border-none shadow-lg hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold">Vida em Movimento</h3>
                      <span className="bg-accent/20 text-accent text-xs font-bold px-2 py-1 rounded">ODS 4</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Programa integrado de esportes (Ballet, Capoeira), educação e desenvolvimento 
                      pessoal de crianças e adolescentes.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Esporte</span>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Educação</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* PROGRAMA 4: PROTEÇÃO */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold mb-8">
                <Shield className="h-5 w-5" />
                PROGRAMA 4: PROTEJA A INFÂNCIA
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Projeto: Juntos pela Infância Segura */}
                <Card className="border-none shadow-lg hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold">Juntos pela Infância</h3>
                      <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">ODS 16</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Proteção integral da infância. Acompanhamento, orientação e rede de proteção 
                      para crianças e adolescentes.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Proteção</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Infância</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Projeto: Campanhas de Conscientização */}
                <Card className="border-none shadow-lg hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold">Campanhas Conscient.</h3>
                      <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">ODS 5</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Campanhas educativas sobre direitos infantis, abuso, exploração e direitos 
                      fundamentais de crianças.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Conscientização</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Direitos</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* EDUCAÇÃO E SAÚDE */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Fonte Educa */}
                <Card className="border-none shadow-lg hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold">Fonte Educa</h3>
                      <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">ODS 4</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Reforço escolar, apoio pedagógico e ensino de línguas estrangeiras. 
                      Ampliação de oportunidades educacionais.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Educação</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Reforço Escolar</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Visão da Vida */}
                <Card className="border-none shadow-lg hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold">Visão da Vida</h3>
                      <span className="bg-secondary/20 text-secondary text-xs font-bold px-2 py-1 rounded">ODS 3</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Saúde visual. Realização de exames de vista e distribuição de óculos 
                      para acesso à saúde visual.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Saúde</span>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">Saúde Visual</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  src="/mesa-da-vida.png" 
                  alt="Projeto Mesa da Vida" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
