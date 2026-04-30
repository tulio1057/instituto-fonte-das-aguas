import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar, MapPin, Users, Clock,
  Mic, Award, Coffee, ArrowRight, CheckCircle2
} from "lucide-react";


export default function Simposio() {
  const palestrantes = [
    {
      nome: "Cássio Ângelo",
      cargo: "Palestrante",
      tema: "Crianças e Internet: desafios, riscos e proteção",
      descricao: "Técnico em Eletroeletrônica pelo IFS, especializando em Inteligência Artificial pela Uninassau. Conhecimentos em Desenvolvimento Web (HTML5, CSS3, JavaScript). Dedica-se a estudar tecnologia e compartilhar conhecimento para promover o uso consciente e seguro das ferramentas digitais.",
      imagem: "/Palestrante 1.jpeg",
    },
    {
      nome: "André Lopes",
      cargo: "Palestrante",
      tema: "Crianças e Internet: desafios, riscos e proteção",
      descricao: "Educador Digital, Perito Ciber, Mestre em Criminalística com especialização em investigação criminal e Doutorando em Criminologia. Autor do livro 'A Tal da Segurança: Proteção na Era Digital'.",
      imagem: "/Palestrante 2.jpeg",
    },
    {
      nome: "Joice Andrade",
      cargo: "Palestrante",
      tema: "Pornografia Infantil",
      descricao: "Assistente Social, especialista em Saúde Mental e Atenção Psicossocial, educadora emocional e em sexualidade com foco na prevenção ao abuso sexual infantil. Graduanda em pedagogia e coautora do livro 'Educação Consciente: criando com empatia'.",
      imagem: "/Palestrante 3.jpeg",
    },
    {
      nome: "Sara Oliveira",
      cargo: "Palestrante",
      tema: "Pornografia Infantil",
      descricao: "Missionária com atuação em ministérios voltados às crianças e adolescentes. Formada em Serviço Social com cursos complementares em: Escuta qualificada para vulneráveis ao tráfico de pessoas e Sistema de Informação de Agravos de Notificação - Sinan.",
      imagem: "/Palestrante 4.jpeg",
    },
  ];

  const programacao = [
    {
      horario: "14:00",
      atividade: "Acolhida e Musicalização",
      descricao: "Recepção dos participantes",
      tipo: "abertura",
    },
    {
      horario: "14:10",
      atividade: "Boas-vindas Institucionais",
      descricao: "Contextualização do encontro e objetivos da tarde",
      tipo: "abertura",
    },
    {
      horario: "14:30",
      atividade: "Painel I – Crianças e Internet: desafios, riscos e proteção",
      descricao: "Palestrantes: André e Cássio",
      tipo: "palestra",
    },
    {
      horario: "15:30",
      atividade: "Momento Institucional e Convite à Causa",
      descricao: "Instituto Fonte das Águas",
      tipo: "institucional",
    },
    {
      horario: "15:45",
      atividade: "Pausa para Café e Mobilização Solidária",
      descricao: "Networking, contribuições espontâneas e apoio ao Instituto",
      tipo: "coffee",
    },
    {
      horario: "16:15",
      atividade: "Painel II – Pornografia Infantil",
      descricao: "Palestrantes: Sara e Joice",
      tipo: "palestra",
    },
    {
      horario: "17:45",
      atividade: "Grupos Temáticos e Construção de Planos de Ação",
      descricao: "Troca de experiências e desafios concretos",
      tipo: "grupo",
    },
    {
      horario: "18:30",
      atividade: "Musicalização e Roda de Conversa",
      descricao: "Perguntas, dúvidas e partilhas com os palestrantes",
      tipo: "roda",
    },
    {
      horario: "18:55",
      atividade: "Socialização dos Planos de Ação",
      tipo: "grupo",
    },
    {
      horario: "19:15",
      atividade: "Encerramento",
      descricao: "Entrega dos certificados e foto oficial do simpósio",
      tipo: "encerramento",
    },
    {
      horario: "19:30",
      atividade: "Fim do Evento",
      tipo: "encerramento",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-primary"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">Evento Anual</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              Simpósio Instituto<br />Fonte das Águas
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-8">
              Um dia dedicado ao conhecimento, networking e transformação social
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6">
                Inscreva-se Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6">
                Ver Programação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Informações do Evento */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Data</p>
                  <p className="font-bold">16/05/2026</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Horário</p>
                  <p className="font-bold">14h às 19h30</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Local</p>
                  <p className="font-bold text-sm">Graça Igreja Batista</p>
                  <p className="text-xs text-muted-foreground">Rua Adezinho da Costa Pinto, 149, Bairro Industrial</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Vagas</p>
                  <p className="font-bold">Limitadas</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Sobre o <span className="text-gradient">Simpósio</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                O Simpósio Instituto Fonte das Águas é um evento anual que reúne profissionais,
                voluntários, educadores e lideranças comunitárias para discutir temas relevantes
                sobre desenvolvimento social, educação, voluntariado e transformação comunitária.
                É uma oportunidade única de aprendizado, networking e troca de experiências.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programação */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Programação <span className="text-gradient">Completa</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Confira a programação prevista para o simpósio
              </p>
            </div>

            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {programacao.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 pb-4 border-b last:border-b-0 last:pb-0"
                    >
                      <div className="flex-shrink-0 w-24">
                        <p className="font-bold text-primary">{item.horario}</p>
                      </div>
                      <div className="flex-1 flex items-start gap-3">
                        {item.tipo === "coffee" && <Coffee className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />}
                        {item.tipo === "palestra" && <Mic className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />}
                        {item.tipo === "grupo" && <Users className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />}
                        {item.tipo === "abertura" && <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />}
                        {item.tipo === "encerramento" && <Award className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />}
                        {item.tipo === "institucional" && <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />}
                        {item.tipo === "roda" && <Users className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />}
                        <div>
                          <p className="font-semibold text-foreground">{item.atividade}</p>
                          {item.descricao && <p className="text-sm text-muted-foreground">{item.descricao}</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <p className="text-center text-sm text-muted-foreground mt-6">
              * A programação pode sofrer alterações. Fique atento às nossas redes sociais para atualizações.
            </p>
          </div>
        </div>
      </section>

      {/* Palestrantes */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Palestrantes <span className="text-gradient">Confirmados</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Profissionais renomados que compartilharão seus conhecimentos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {palestrantes.map((palestrante, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-8 text-center">
                    {palestrante.imagem ? (
                      <img
                        src={palestrante.imagem}
                        alt={palestrante.nome}
                        className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-primary"
                      />
                    ) : (
                      <div className="w-24 h-24 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4">
                        <Users className="h-12 w-12 text-white" />
                      </div>
                    )}
                    <h3 className="font-display text-xl font-bold mb-2">{palestrante.nome}</h3>
                    <p className="text-sm font-semibold text-primary mb-1">{palestrante.cargo}</p>
                    <p className="text-xs font-semibold text-secondary mb-3">{palestrante.tema}</p>
                    {palestrante.descricao && (
                      <p className="text-xs text-muted-foreground leading-relaxed">{palestrante.descricao}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* O que você vai ganhar */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                O que Você Vai <span className="text-gradient">Ganhar</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Certificado de Participação</h3>
                    <p className="text-sm text-muted-foreground">
                      Certificado digital para todos os participantes presentes
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Material Didático</h3>
                    <p className="text-sm text-muted-foreground">
                      Apostila digital com conteúdo das palestras e referências
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Evento Gratuito</h3>
                    <p className="text-sm text-muted-foreground">
                      Participação totalmente gratuita e aberta ao público
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Networking</h3>
                    <p className="text-sm text-muted-foreground">
                      Oportunidade de conhecer profissionais e organizações da área social
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Inscrições */}
      <section className="section-padding">
        <div className="container">
          <Card className="border-none shadow-xl gradient-primary text-white max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Garanta sua Vaga!
              </h2>
              <p className="text-xl mb-8 opacity-90">
                As vagas são limitadas. Não perca a oportunidade de participar deste evento gratuito e único!
              </p>
              <div className="space-y-4 mb-8">
                <div className="inline-flex items-center gap-2 text-lg">
                  <CheckCircle2 className="h-6 w-6" />
                  <span>Evento gratuito</span>
                </div>
                <div className="inline-flex items-center gap-2 text-lg ml-8">
                  <CheckCircle2 className="h-6 w-6" />
                  <span>Com certificado</span>
                </div>
                <div className="inline-flex items-center gap-2 text-lg ml-8">
                  <CheckCircle2 className="h-6 w-6" />
                  <span>Vagas limitadas</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5579991439647?text=Olá! Gostaria de me inscrever no Simpósio do Instituto Fonte das Águas.%0A%0AData: 16/05/2026%0AHorário: 14h às 19h30%0ALocal: Graça Igreja Batista - Rua Adezinho da Costa Pinto, 149, Bairro Industrial%0AEvento Gratuito com Certificado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Inscrever-se pelo WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <p className="text-sm mt-6 opacity-75">
                Ou entre em contato pelo e-mail: eventos@institutofontedasaguas.org
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">
                Perguntas <span className="text-gradient">Frequentes</span>
              </h2>
            </div>

            <div className="space-y-4">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">O simpósio é gratuito?</h3>
                  <p className="text-sm text-muted-foreground">
                    Sim! O evento é totalmente gratuito e inclui certificado de participação.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Quem pode participar?</h3>
                  <p className="text-sm text-muted-foreground">
                    O simpósio é aberto para educadores, voluntários, estudantes, profissionais da
                    área social e qualquer pessoa interessada nos temas abordados.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Como faço para me inscrever?</h3>
                  <p className="text-sm text-muted-foreground">
                    As inscrições podem ser feitas pelo WhatsApp ou e-mail. Basta clicar no botão
                    de inscrição e preencher seus dados.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Vou receber certificado?</h3>
                  <p className="text-sm text-muted-foreground">
                    Sim! Todos os participantes presentes receberão certificado digital de participação.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
