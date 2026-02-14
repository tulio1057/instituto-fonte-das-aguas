import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, Users, Calendar, Clock, BookOpen, Smile, 
  CheckCircle2, ArrowRight, Phone, Mail, Target 
} from "lucide-react";
import { toast } from "sonner";

export default function Voluntarios() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    area: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp
    const whatsappNumber = "5579996402118";
    const message = `Olá! Gostaria de ser voluntário no Instituto Fonte das Águas.

Nome: ${formData.nome}
Email: ${formData.email}
Telefone: ${formData.telefone}
Área de Interesse: ${formData.area}
Mensagem: ${formData.mensagem}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecionando para WhatsApp...");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Seja um Voluntário
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Transforme vidas através do seu tempo, talento e dedicação
            </p>
          </div>
        </div>
      </section>

      {/* Por que ser voluntário */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Por que Ser <span className="text-gradient">Voluntário?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ser voluntário no Instituto Fonte das Águas é uma oportunidade de fazer a diferença 
              real na vida de crianças, adolescentes e famílias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Impacto Real</h3>
                <p className="text-muted-foreground">
                  Veja diretamente o resultado do seu trabalho na transformação de vidas
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Comunidade</h3>
                <p className="text-muted-foreground">
                  Faça parte de uma equipe de 56 voluntários dedicados e apaixonados
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Smile className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Crescimento Pessoal</h3>
                <p className="text-muted-foreground">
                  Desenvolva novas habilidades e amplie sua visão de mundo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trilha do Voluntário */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Trilha do <span className="text-gradient">Voluntário</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nosso processo de integração garante que você esteja preparado para fazer a diferença
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Passo 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <Card className="flex-1 border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      Demonstração de Interesse
                    </h3>
                    <p className="text-muted-foreground">
                      Primeiramente, você demonstra seu interesse em ser voluntário através do 
                      preenchimento de um formulário ou contato direto pelo WhatsApp.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Passo 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <Card className="flex-1 border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
                      <Mail className="h-5 w-5 text-secondary" />
                      Preenchimento de Formulário
                    </h3>
                    <p className="text-muted-foreground">
                      Você preenche o formulário com suas informações pessoais, habilidades, 
                      experiências e áreas de interesse para nos conhecer melhor.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Passo 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <Card className="flex-1 border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5 text-accent" />
                      Entrevista com RH
                    </h3>
                    <p className="text-muted-foreground">
                      Realizamos uma entrevista para conhecer suas motivações, disponibilidade e 
                      habilidades. Também apresentamos o instituto, nossa missão e os projetos.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Passo 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <Card className="flex-1 border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Participação de Capacitação
                    </h3>
                    <p className="text-muted-foreground">
                      Você participa de uma sessão de capacitação onde aprender sobre nossa 
                      missão, valores, protocolos, ética e boas práticas de voluntariado.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Passo 5 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center text-white font-bold">
                    5
                  </div>
                </div>
                <Card className="flex-1 border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5 text-secondary" />
                      Direcionamento ao Projeto
                    </h3>
                    <p className="text-muted-foreground">
                      Você é direcionado ao projeto mais adequado às suas habilidades e interesses, 
                      onde começará a colocar seus talentos em prática junto à nossa equipe.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Passo 6 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                    6
                  </div>
                </div>
                <Card className="flex-1 border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      Assinatura de Termo de Adesão
                    </h3>
                    <p className="text-muted-foreground">
                      Você assina o Termo de Adesão, formalizando seu compromisso com a missão 
                      do Instituto. Agora você é oficialmente um membro do nosso time!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Áreas de <span className="text-gradient">Atuação</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha a área que mais combina com suas habilidades e interesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-bold mb-2">Educação</h3>
                <p className="text-sm text-muted-foreground">
                  Reforço escolar, alfabetização e atividades educativas
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <Heart className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="font-display font-bold mb-2">Assistência Social</h3>
                <p className="text-sm text-muted-foreground">
                  Apoio às famílias e distribuição de alimentos
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <Users className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-display font-bold mb-2">Esportes e Lazer</h3>
                <p className="text-sm text-muted-foreground">
                  Atividades físicas, esportes e recreação
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <Smile className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-bold mb-2">Arte e Cultura</h3>
                <p className="text-sm text-muted-foreground">
                  Oficinas de arte, música e expressão criativa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Inscreva-se <span className="text-gradient">Agora</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário e entraremos em contato pelo WhatsApp
              </p>
            </div>

            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      placeholder="(79) 9 9999-9999"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="area">Área de Interesse *</Label>
                    <Input
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Educação, Esportes, Assistência Social..."
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Conte-nos um pouco sobre você e por que quer ser voluntário..."
                      className="mt-2 min-h-32"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-secondary text-white font-semibold"
                  >
                    Enviar Inscrição via WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Ao enviar, você será redirecionado para o WhatsApp para finalizar sua inscrição
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contato Direto */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Ou entre em contato diretamente:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5579996402118?text=Olá! Gostaria de ser voluntário no Instituto Fonte das Águas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (79) 9 9640-2118
                </a>
                <a
                  href="https://wa.me/5579988727134?text=Olá! Gostaria de ser voluntário no Instituto Fonte das Águas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (79) 9 8872-7134
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
