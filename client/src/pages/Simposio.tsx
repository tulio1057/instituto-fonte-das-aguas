import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar, MapPin, Users, Clock,
  Mic, Award, Coffee, ArrowRight, CheckCircle2
} from "lucide-react";
import { useContent } from "@/hooks/useContent";
import type { SiteContent, SimposioData } from "@/services/contentTypes";

const TIPO_ICON: Record<string, React.ReactNode> = {
  coffee: <Coffee className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />,
  palestra: <Mic className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />,
  grupo: <Users className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />,
  abertura: <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />,
  encerramento: <Award className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />,
  institucional: <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />,
  roda: <Users className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />,
};

const DEFAULT_SIMPOSIO = {
  titulo: "SIMPÓSIO INFÂNCIA SEGURA 2026\nFonte das Águas",
  subtitulo: "Um dia dedicado ao conhecimento, networking e transformação social",
  data: "16/05/2026",
  horario: "14h às 19h30",
  local: "Graça Igreja Batista",
  enderecoLocal: "Rua Adezinho da Costa Pinto, 149, Bairro Industrial",
  vagas: "Limitadas",
  vagasLimitadas: true,
  descricao: "O Simpósio Instituto Fonte das Águas é um evento anual que reúne profissionais, voluntários, educadores e lideranças comunitárias para discutir temas relevantes sobre desenvolvimento social, educação, voluntariado e transformação comunitária. É uma oportunidade única de aprendizado, networking e troca de experiências.",
  programacao: [
    { horario: "14:00", atividade: "Acolhida e Musicalização", descricao: "Recepção dos participantes", tipo: "abertura" },
    { horario: "14:10", atividade: "Boas-vindas Institucionais", descricao: "Contextualização do encontro e objetivos da tarde", tipo: "abertura" },
    { horario: "14:30", atividade: "Painel I – Crianças e Internet: desafios, riscos e proteção", descricao: "Palestrantes: André e Cássio", tipo: "palestra" },
    { horario: "15:30", atividade: "Momento Institucional e Convite à Causa", descricao: "Instituto Fonte das Águas", tipo: "institucional" },
    { horario: "15:45", atividade: "Pausa para Café e Mobilização Solidária", descricao: "Networking, contribuições espontâneas e apoio ao Instituto", tipo: "coffee" },
    { horario: "16:15", atividade: "Painel II – Pornografia Infantil", descricao: "Palestrantes: Sara e Joice", tipo: "palestra" },
    { horario: "17:45", atividade: "Grupos Temáticos e Construção de Planos de Ação", descricao: "Troca de experiências e desafios concretos", tipo: "grupo" },
    { horario: "18:30", atividade: "Musicalização e Roda de Conversa", descricao: "Perguntas, dúvidas e partilhas com os palestrantes", tipo: "roda" },
    { horario: "18:55", atividade: "Socialização dos Planos de Ação", descricao: "", tipo: "grupo" },
    { horario: "19:15", atividade: "Encerramento", descricao: "Entrega dos certificados e foto oficial do simpósio", tipo: "encerramento" },
    { horario: "19:30", atividade: "Fim do Evento", descricao: "", tipo: "encerramento" },
  ],
  palestrantes: [
    { id: "p1", nome: "Cássio Ângelo", cargo: "Palestrante", tema: "Crianças e Internet: desafios, riscos e proteção", descricao: "Técnico em Eletroeletrônica pelo IFS, especializando em Inteligência Artificial pela Uninassau. Conhecimentos em Desenvolvimento Web (HTML5, CSS3, JavaScript). Dedica-se a estudar tecnologia e compartilhar conhecimento para promover o uso consciente e seguro das ferramentas digitais.", imagemBase64: "" },
    { id: "p2", nome: "André Lopes", cargo: "Palestrante", tema: "Crianças e Internet: desafios, riscos e proteção", descricao: "Educador Digital, Perito Ciber, Mestre em Criminalística com especialização em investigação criminal e Doutorando em Criminologia. Autor do livro 'A Tal da Segurança: Proteção na Era Digital'.", imagemBase64: "" },
    { id: "p3", nome: "Joice Andrade", cargo: "Palestrante", tema: "Pornografia Infantil", descricao: "Assistente Social, especialista em Saúde Mental e Atenção Psicossocial, educadora emocional e em sexualidade com foco na prevenção ao abuso sexual infantil.", imagemBase64: "" },
    { id: "p4", nome: "Sara Oliveira", cargo: "Palestrante", tema: "Pornografia Infantil", descricao: "Missionária com atuação em ministérios voltados às crianças e adolescentes. Formada em Serviço Social.", imagemBase64: "" },
  ],
  linkInscricao: "https://forms.gle/DUCwBkzeWWG31dQK8",
};

export default function Simposio() {
  const { content } = useContent();
  const s: SimposioData = (content as SiteContent).simposio ?? DEFAULT_SIMPOSIO;

  const tituloParts = s.titulo.split("\n");

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')" }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">Evento Anual</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              {tituloParts.map((part: string, i: number) => (
                <span key={i}>{part}{i < tituloParts.length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-8">{s.subtitulo}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={s.linkInscricao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-6 bg-white text-primary rounded-md hover:bg-white/90 font-semibold text-lg transition-colors"
              >
                Inscreva-se Agora <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6">
                Ver Programação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Informações */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Data</p>
                  <p className="font-bold">{s.data}</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Horário</p>
                  <p className="font-bold">{s.horario}</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Local</p>
                  <p className="font-bold text-sm">{s.local}</p>
                  <p className="text-xs text-muted-foreground">{s.enderecoLocal}</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Vagas</p>
                  <p className="font-bold">{s.vagasLimitadas ? (s.vagas || "Limitadas") : "Abertas"}</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Sobre o <span className="text-gradient">Simpósio</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">{s.descricao}</p>
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
              <p className="text-lg text-muted-foreground">Confira a programação prevista para o simpósio</p>
            </div>
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {s.programacao.map((item: any, index: number) => (
                    <div key={index} className="flex gap-4 pb-4 border-b last:border-b-0 last:pb-0">
                      <div className="flex-shrink-0 w-24">
                        <p className="font-bold text-primary">{item.horario}</p>
                      </div>
                      <div className="flex-1 flex items-start gap-3">
                        {TIPO_ICON[item.tipo] || <Mic className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />}
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
              <p className="text-lg text-muted-foreground">Profissionais renomados que compartilharão seus conhecimentos</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {s.palestrantes.map((p: any, index: number) => (
                <Card key={p.id || index} className="border-none shadow-lg">
                  <CardContent className="p-8 text-center">
                    {p.imagemBase64 ? (
                      <img src={p.imagemBase64} alt={p.nome} className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-primary" />
                    ) : (
                      <div className="w-24 h-24 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4">
                        <Users className="h-12 w-12 text-white" />
                      </div>
                    )}
                    <h3 className="font-display text-xl font-bold mb-2">{p.nome}</h3>
                    <p className="text-sm font-semibold text-primary mb-1">{p.cargo}</p>
                    <p className="text-xs font-semibold text-secondary mb-3">{p.tema}</p>
                    {p.descricao && <p className="text-xs text-muted-foreground leading-relaxed">{p.descricao}</p>}
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
              {[
                { color: "text-primary", title: "Certificado de Participação", desc: "Certificado digital para todos os participantes presentes" },
                { color: "text-secondary", title: "Material Didático", desc: "Apostila digital com conteúdo das palestras e referências" },
                { color: "text-accent", title: "Evento Gratuito", desc: "Participação totalmente gratuita e aberta ao público" },
                { color: "text-primary", title: "Networking", desc: "Oportunidade de conhecer profissionais e organizações da área social" },
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-lg">
                  <CardContent className="p-6 flex items-start gap-4">
                    <CheckCircle2 className={`h-6 w-6 ${item.color} flex-shrink-0 mt-1`} />
                    <div>
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inscrições */}
      <section className="section-padding">
        <div className="container">
          <Card className="border-none shadow-xl gradient-primary text-white max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Garanta sua Vaga!</h2>
              <p className="text-xl mb-8 opacity-90">As vagas são limitadas. Não perca a oportunidade de participar deste evento gratuito e único!</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {["Evento gratuito", "Com certificado", "Vagas limitadas"].map((label) => (
                  <div key={label} className="inline-flex items-center gap-2 text-lg">
                    <CheckCircle2 className="h-6 w-6" /><span>{label}</span>
                  </div>
                ))}
              </div>
              <a
                href={s.linkInscricao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Inscrever-se pelo Formulário <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <p className="text-sm mt-6 opacity-75">Ou entre em contato pelo e-mail: eventos@institutofontedasaguas.org</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">Perguntas <span className="text-gradient">Frequentes</span></h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "O simpósio é gratuito?", r: "Sim! O evento é totalmente gratuito e inclui certificado de participação." },
                { q: "Quem pode participar?", r: "O simpósio é aberto para educadores, voluntários, estudantes, profissionais da área social e qualquer pessoa interessada nos temas abordados." },
                { q: "Como faço para me inscrever?", r: "Basta clicar no botão de inscrição e preencher seus dados." },
                { q: "Vou receber certificado?", r: "Sim! Todos os participantes presentes receberão certificado digital de participação." },
              ].map((faq, i) => (
                <Card key={i} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.r}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
